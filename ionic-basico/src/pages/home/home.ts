import { ProfilePage } from '../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../providers/messages';
import { Toast } from '../../providers/toast';
import { Login } from '../../providers/login';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateSaborPage } from '../create-sabor/create-sabor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public exibirConteudo : boolean = true;
  public listaAlunos = [];
  public user : any = null;
  public password : any = null;

  constructor(public navCtrl: NavController, public messages : Messages, public toats : Toast, public loginProvider : Login) {

  }

  buttonClick(){
    this.exibirConteudo = !this.exibirConteudo;
  }

  public adicionarAlunos(){
    this.listaAlunos.push({nome : "Aluno A"});
    this.listaAlunos.push({nome : "Aluno B"});
    this.listaAlunos.push({nome : "Aluno C"});
    this.listaAlunos.push({nome : "Aluno D"});
    this.listaAlunos.push({nome : "Aluno E"});
  }

  public limparLista(){
    this.listaAlunos = [];
  }

  public showMessage(){
    this.messages.loadingShow();
  }

  public showToast(){
    this.toats.presentToast("Login ou Senha incorretos!");
  }

  public login() {
    this.loginProvider.loginApi(this.user, this.password).subscribe(
      (data : any) => {
        console.log("login:",data);
          this.navCtrl.setRoot(CreateSaborPage);
      },
      (error : any) => {
        console.log(error);
        this.showToast();
      }
    )
  }

  public accessCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
}

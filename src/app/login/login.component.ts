import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur=0;


  constructor(private authService : AuthService,
    private router: Router) { }


  ngOnInit(): void {
  }
  onLoggedin(){
    console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser){
      if(this.authService.isAdmin())
      this.router.navigate(['dashboard']);
      else
      this.router.navigate(['demandeConge']);

    }
    else
    //alert('Login ou mot de passe incorrecte!');
    this.erreur = 1;
    }

}

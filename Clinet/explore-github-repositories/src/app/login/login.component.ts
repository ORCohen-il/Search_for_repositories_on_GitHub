import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Token, User, UserDto } from 'src/assets/models/user';
import { AdministrationLogin } from '../services/administration-Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AdministrationLogin]

})
export class LoginComponent {
  constructor(private router: Router,private Loginservice: AdministrationLogin) { }


  OnSubmit(user : User ){

      this.Loginservice.Login(user).subscribe({
        
        next: (res:string) => {

          if(res){
            localStorage.setItem('JWTtoken', res);
            this.router.navigate(['/main']);
          }
          
        },
        error: (e:HttpErrorResponse ) => {
          alert(e.error)
        },
        
  });   
  
    
  }
}

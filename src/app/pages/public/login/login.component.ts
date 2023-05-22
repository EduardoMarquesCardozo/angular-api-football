import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  sendingData: Boolean = false;
  error: Boolean = false;
  form:FormGroup;
  constructor(private fb:FormBuilder,private router: Router, private auth: AuthService, ) {
    this.form = this.fb.group({
      key: ['',Validators.required]
    });
  }

  onSubmit(){
    const val = this.form.value;
    if (val.key) {
      this.auth.login(val.key)
      .subscribe(
          (val) => {
            if(typeof val != 'string'){
              this.error = true;
              return;
            }
            this.router.navigateByUrl('/home');
          }
      );
    }
  }
}

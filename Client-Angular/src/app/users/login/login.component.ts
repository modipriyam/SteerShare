import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: String;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    //get return url from route parameters or default to "/"
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl] || '/';

  }

  get formControls(){
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log(this.formControls.username.value);
    console.log(this.formControls.password.value);
    console.log(this.loginForm.valid);
    this.userService.login(this.formControls.username.value, this.formControls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          window.alert(data.username);
          this.router.navigateByUrl('');
        },
        error => {
          window.alert('error');
        }
      );
  }

}

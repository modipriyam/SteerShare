import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private router: Router, 
      private userService: UserService
  ) { 
    if(this.userService.currentUserValue){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          window.alert("Registration successful!");
        },
        error => {
          window.alert(error);
        }
      )
  }

}

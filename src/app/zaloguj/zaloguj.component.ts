import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services/alert.service';


@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.css']
})

export class ZalogujComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data === false) {
            this.alertService.error('Złe hasło lub nazwa użytkownika!');
            // this.alertService.success( data);
          } else {
            this.alertService.success('Zalogowano');
            this.returnUrl = '/';
            this.router.navigate([this.returnUrl]);
            window.location.reload();
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

import { inform } from './../info';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  num1;
  num2;
  loading = false;
  returnUrl: string;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }
  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.num1, this.num2)
        .subscribe(
            data => {
              if (data.name == this.num1 && data.password == this.num2) {
                this.router.navigate(['homePage']);
              }
              else{
                alert("incorrect username and password");
              }
            });
}

}

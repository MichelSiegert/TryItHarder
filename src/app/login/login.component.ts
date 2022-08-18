import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
//prep body
    let body = new HttpParams()
      .append('name','Michel')
      .append("address","Am Deepenbrook 1")
      .append("password","passwort2")
      .append("email","msiegert@dons.usfca.edu");

    this.http.post('/newUser',
      body,
      {responseType: 'json'})
      .subscribe((Response: any) =>{
        console.log(Response)
      })

    body = new HttpParams()
      .append('email','msiegert@dons.usfca.edu')
      .append("password", "passwort2")

    this.http.post("/login",
      body,
      {responseType: 'json'})
      .subscribe((Response: any) =>{
        console.log(Response)
      })

    body = new HttpParams()
      .append('email','msiegert@dons.usfca.edu')
      .append("password", "passwort1")

    this.http.post("/login",
      body,
      {responseType: 'json'})
      .subscribe((Response: any) =>{
        console.log(Response)
      })
  }

}

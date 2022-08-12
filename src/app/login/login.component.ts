import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get('http://127.0.0.1:8080', //LOCAL
    this.http.get('/login', //PROD
    {responseType: 'text'})
      .subscribe((Response: any) => {
          console.log(Response)
      })
  }

}

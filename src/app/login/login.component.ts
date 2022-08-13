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
      .append('name','nice');

    this.http.post('/nice',
      body,
      {responseType: 'text'})
      .subscribe((Response: any) =>{
        console.log(Response)
      })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ServService {
  constructor(private http: HttpClient)  {

  }

  for(let i = 0; i < 1000; i++) {

  }
  get() {

    return this.http.get('http://cb465f0c.ngrok.io/api/test');
  }

  post() {

    return this.http.post('http://cb465f0c.ngrok.io/api/test', {title: 'My post', description: 'kljdsckljbfklef' });
  }

  post() {

    return this.http.post('http://cb465f0c.ngrok.io/api/test', {title: 'My post', description: 'kljdsckljbfklef' });
  }


}

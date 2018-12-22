import { Component } from '@angular/core';
import { ServService } from './serv.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public content;

  constructor(private api: ServService){

  }
    get(){
      this.api.get().subscribe((data) => this.content = data)
  }
  post(){
      this.api.post().subscribe((date) => console.log(date))
  }

}



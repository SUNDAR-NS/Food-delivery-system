import { Component } from '@angular/core';
import {ShareService} from '../service/share.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-north',
  templateUrl: './north.component.html',
  styleUrls: ['./north.component.css']
})
export class NorthComponent {

  public food:any;
  public order:any;
  constructor(private Shared : ShareService,private http: HttpClient){}
  public message:any;
  ngOnInit():void
  {
    
    this.http.get('http://localhost:3000/nort').subscribe(Response=>{
      console.log("Entered");
        if(Response){
          console.log("data received");
        }
        console.log(Response);
        this.food=Response;
      })
    

  }
  add(no:Number){
    for(var i=0;i<this.food.length;i++){
      if(this.food[i].sno == no){
        this.order= this.food[i];
        this.Shared.setmessage(this.order);
      }
    }
    console.log(this.order);
  }

}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-list-deails',
  templateUrl: './list-deails.component.html',
  styleUrls: ['./list-deails.component.css']
})
export class ListDeailsComponent implements OnInit {
  storeData:any[]
  storeIteratedElement;
  storeArray:any[]

  constructor(private _rs:RestService) { 
    this._rs.getDetails().subscribe((data)=>{
      this.storeData=[data];
      var a = this.storeData
      for (let num of a) {
        for (let b of num.data) {
          this.storeIteratedElement = b.id;
          this.storeArray=[b];
          console.log("here id is " + this.storeIteratedElement)
          // if (this.storeParam == this.storeIteratedElement) {
          //   this.storeObject = b;
          // }
        }
      }

    })
  }
 

  ngOnInit() {
    console.log("storeArray"+this.storeArray)
  }
  delete(index: number){
    
    this.storeArray.splice(index,1);
  }


}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id:number;
  viewEmployeeDetails:any[]
  xyz
  storeParam;

  constructor(private _rs:RestService,private ar:ActivatedRoute) { 
      let paramData= this.ar.snapshot.params['id']
      console.log(paramData);
      this.storeParam=paramData
   
    this._rs.viewDetails(paramData).subscribe((detailsOfUser)=>
    {
      this.viewEmployeeDetails=[detailsOfUser];
      this.xyz=this.viewEmployeeDetails
      console.log(this.xyz);
    })
  }

  ngOnInit() {
  }

}

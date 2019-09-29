import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  convertId;
  storeIteratedElement: Object
  successResponse: Object
  isChilcked: boolean = false
  storeObject;
  viewEmployeeDetails: any[]
  storeParam;
  constructor(private _rs: RestService, private ar: ActivatedRoute) {
    // this._rs.getDetails().subscribe((data)=>{
    //   this.editstoreData=[data];
    let paramData = this.ar.snapshot.params['id']
    this.storeParam = paramData
    this.convertId = parseInt(this.storeParam);
    this._rs.viewDetails(paramData).subscribe((detailsOfUser) => {
      this.viewEmployeeDetails = [detailsOfUser];
      var a = this.viewEmployeeDetails
      for (let num of a) {
        for (let b of num.data) {
          this.storeIteratedElement = b.id;
          console.log("here id is " + this.storeIteratedElement)
          if (this.storeParam == this.storeIteratedElement) {
            this.storeObject = b;
          }
        }
      }
    })
  }

  ngOnInit() {
  }

  updation() {
    return this._rs.updateDetails(this.storeObject).subscribe((data) => {
      this.isChilcked = true;
      this.successResponse = this.storeObject
    })
  }
}

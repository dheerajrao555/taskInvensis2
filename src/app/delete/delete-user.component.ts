import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  convertId;
  storeIteratedElement: Object
  successResponse: Object
  isChilcked: boolean = false
  storeObject;
  viewEmployeeDetails: any[]
  storeParam;
  deleteValue

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
          this.deleteValue=b
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
  deleteUser(index){
    
      this.deleteValue.splice(index,1);
    }

  }

    
    


import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
export class Clientclass {
  FirstName: string;
  Surname: string;
  IdentityType: string;
  IdentityNumber: string;
  DOB: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ClientService]

})

export class EditComponent implements OnInit {

  public FirstName;
  public Surname;
  public IdentityType;
  public IdentityNumber;
  public DOB;
  public val: Clientclass;
  constructor(private clientservice : ClientService) { }
  //constructor() { }

  ngOnInit() {
  
       this.clientservice.getClient().subscribe(
        data => {
             this.FirstName = data.FirstName;
             this.Surname = data.Surname;
             this.IdentityType = data.IdentityType;         
             this.IdentityNumber = data.IdentityNumber;
             this.DOB = data.DOB;
        });
  }
  SaveChanges()  {
    this.val = new Clientclass();
    this.val.FirstName = this.FirstName;
    this.val.Surname = this.Surname;
    this.val.IdentityType = this.IdentityType;
    this.val.IdentityNumber = this.IdentityNumber;
    this.val.DOB = this.DOB;

    this.clientservice.SaveClient(this.val).subscribe(
      res => {
        var result = res;
        console.log(result);
      });   
  }
}


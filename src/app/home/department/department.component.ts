import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { AdddepartmentComponent } from 'src/app/adddepartment/adddepartment.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  dept: Department[];

  constructor(private dialog: MatDialog,private apiService:ApiServiceService) {
    this.dept = [{ id: 1, name: 'ggh' }, { id: 2, name: 'bhghj' }];
  }

  ngOnInit() {
     this.getMethod();
  }
  getMethod(){
    this.apiService.getPosts().subscribe(element=>{
         console.log("element",element)
    });
  }
  addDepartment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
     
    };
    const dialogRef = this.dialog.open(AdddepartmentComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log(" Dialog output: ", data)
    );
  }


}

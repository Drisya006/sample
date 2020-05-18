import { Component, OnInit } from '@angular/core';
import { Department, Products } from 'src/app/models/Department';
import { AdddepartmentComponent } from 'src/app/adddepartment/adddepartment.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  
})

export class DepartmentComponent implements OnInit {
  dept: Department[];
  products : Products[];
  items=[];

  constructor(private dialog: MatDialog,private apiService:ApiServiceService,
    private router:Router,private  route:ActivatedRoute) {
    this.dept = [{ id: 1, name: 'ggh' , category: 'CS'}, { id: 2, name: 'bhghj' ,category:'Mech'}];
  }

  ngOnInit() {
     this.getMethod();
     let id = this.route.snapshot.paramMap.get('id');
     this.dept = [{ id: 1, name: 'ggh',category: 'CS' }, { id: 2, name: 'bhghj',category: 'CS' }];
     this.products = [{ id:100,name:'Redmi' }];
     this.getProducts();
  }
  getMethod(){
    this.apiService.getPosts().subscribe(element=>{
         console.log("element",element)
    });
  }
  getProducts(){
    this.items.push(this.products);
    console.log("items",this.items)
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
  editDepartment(){
    this.router.navigate(['home/department/edit']);
  }
  goTodepartmentDetailPage(item){
    this.router.navigate(['home/department/detail/',item.id]);
  }

}

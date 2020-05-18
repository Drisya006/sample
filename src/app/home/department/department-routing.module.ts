import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';


const routes: Routes = [{
  path: '',
  component: DepartmentComponent
   
},
{
  path: 'edit',
  component: EditDepartmentComponent
},
{
  path: 'detail/:id',
  component : DepartmentdetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

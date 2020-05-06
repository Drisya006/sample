import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'department',
  component: DepartmentComponent,
  children: [{
    path: 'edit',
    component: EditDepartmentComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

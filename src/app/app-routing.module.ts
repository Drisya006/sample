import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditDepartmentComponent } from './home/department/edit-department/edit-department.component';
import { LoginGuard } from './login.guard';
import { SampleComponent } from './sample/sample.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login.module').then(s => s.LoginModule)
}, {
  path: 'home',
  component: HomeComponent,
  children: [{
    path: 'department',
    loadChildren: () => import('./home/department/department.module').then(s => s.DepartmentModule),
     canActivate :[LoginGuard]
  }]

},
{
  path: 'student',
  loadChildren: () => import('./student/student.module').then(s => s.StudentModule)
},
{
  path: 'product',
  component:ProductComponent
},
{
  path: 'sample',
  component:SampleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

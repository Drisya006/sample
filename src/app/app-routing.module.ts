import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditDepartmentComponent } from './home/department/edit-department/edit-department.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login.module').then(s => s.LoginModule)
}, {
  path: 'home',
  component: HomeComponent,
  children: [{
    path: 'department',
    loadChildren: () => import('./home/department/department.module').then(s => s.DepartmentModule),

  }]

},
{
  path: 'student',
  loadChildren: () => import('./student/student.module').then(s => s.StudentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{
  path: '',
  component : HomeComponent,
  children: [{
  path: 'department',
  loadChildren: () => import('../home/department/department.module').then(s => s.DepartmentModule)
 }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

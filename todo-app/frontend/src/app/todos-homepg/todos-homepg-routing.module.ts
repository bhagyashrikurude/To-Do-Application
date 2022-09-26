import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosHomepgComponent } from './todos-homepg.component';

const routes: Routes = [{ path: '', component: TodosHomepgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosHomepgRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosHomepgRoutingModule } from './todos-homepg-routing.module';
import { TodosHomepgComponent } from './todos-homepg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodosHomepgComponent
  ], 
  imports: [
    CommonModule,
    TodosHomepgRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TodosHomepgModule { }

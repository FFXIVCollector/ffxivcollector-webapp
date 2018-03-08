import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }

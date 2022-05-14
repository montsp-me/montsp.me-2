import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicPage } from './ionic/ionic.page';
import { CodePage } from './code/code.page';
import { IonicModule } from '@ionic/angular';
import { CategoryPage } from '../category/category.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  },
  {
    path: 'ionic',
    component: IonicPage
  },
  {
    path: 'code',
    component: CodePage
  },
  
]



@NgModule({
  declarations: [IonicPage, CodePage, ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),

  ]
})
export class Category2Module { }

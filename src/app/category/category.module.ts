import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { CategoryPageRoutingModule } from './category-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
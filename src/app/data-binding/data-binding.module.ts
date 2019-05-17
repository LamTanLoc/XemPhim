import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

import {FormsModule} from '@angular/forms';
import { BaiTapBindingComponent } from './bai-tap-binding/bai-tap-binding.component';
import { BaitapRegisterComponent } from './baitap-register/baitap-register.component';
@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent, BaiTapBindingComponent, BaitapRegisterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent,
    OnewayBindingComponent
  
  ]
})
export class DataBindingModule { }

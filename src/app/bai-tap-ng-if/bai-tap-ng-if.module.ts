import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapNgIfComponent } from './bai-tap-ng-if.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [BaiTapNgIfComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapNgIfComponent
  ]
})
export class BaiTapNgIfModule { }

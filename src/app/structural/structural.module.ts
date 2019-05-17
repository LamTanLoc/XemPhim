import { NgModule } from '@angular/core';

import { StructuralComponent } from './structural.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CommonModule } from '@angular/common';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [StructuralComponent, NgIfComponent, NgForComponent, NgSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralComponent,
    NgIfComponent
  ]
})
export class StructuralModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';

import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2SlideComponent } from './baitap2/baitap2-slide/baitap2-slide.component';
import { Baitap2ContentComponent } from './baitap2/baitap2-content/baitap2-content.component';
import { WhatWeDoComponent } from './baitap2/baitap2-content/what-we-do/what-we-do.component';
import { ContactComponent } from './baitap2/baitap2-content/contact/contact.component';
import { Baitap2ListComponent } from './baitap2/baitap2-list/baitap2-list.component';
import { CardComponent } from './baitap2/baitap2-list/card/card.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralModule } from './structural/structural.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { BaiTapNgIfModule } from './bai-tap-ng-if/bai-tap-ng-if.module';
import { NgContentModule } from './ng-content/ng-content.module';





@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1HeaderComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2SlideComponent,
    Baitap2ContentComponent,
    WhatWeDoComponent,
    ContactComponent,
    Baitap2ListComponent,
    CardComponent,
    Baitap2FooterComponent,

  
   
    
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
    StructuralModule,
    AttributeDirectiveModule,
    BaiTapNgIfModule,
    NgContentModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

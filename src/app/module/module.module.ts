import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HeaderComponent } from './layout/commonLayout/header/header.component';
import { SidebarComponent } from './layout/commonLayout/sidebar/sidebar.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { HomeComponent } from './layout/pages/home/home.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }

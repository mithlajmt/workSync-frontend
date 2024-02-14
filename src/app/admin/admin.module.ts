import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AppModule } from '../app.module';
import { TopbarComponent } from '../shared/components/main-hrms/topbar/topbar.component';




@NgModule({
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  exports: [AddEmployeeComponent] 
})
export class AdminModule {}



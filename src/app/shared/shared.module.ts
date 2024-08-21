import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { NgModule } from "@angular/core";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

  

@NgModule({
  declarations: [ 
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedRoutingModule, 
    ReactiveFormsModule,   
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,     
    MaterialModule, 
    AuthLayoutComponent
  ]
})

export class SharedModule { }

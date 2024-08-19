import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { NgModule } from "@angular/core";

  

@NgModule({
  declarations: [ 
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
  ]
})

export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; 
import { AuthRoutingModule } from './auth-routing.module';  
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
 

@NgModule({
  declarations: [ 
    LoginComponent, 
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedModule, 
    AuthRoutingModule, 
    MatStepperModule,
    NgOptimizedImage
  ],
})
export class AuthModule {}

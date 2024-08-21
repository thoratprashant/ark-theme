import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'; 
import { AppComponent } from './app.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { LoginComponent } from './component/auth/login/login.component'; 
import { AppRoutingModule } from './app.routes';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
//  }


@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
}

) export class AppModule { }
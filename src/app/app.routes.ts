import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
 
export const routes: Routes = [ 
    {
        path: '',
        component: AuthLayoutComponent,
        loadChildren: () => import('./component/auth/auth.module').then(mod => mod.AuthModule),  
    }
];



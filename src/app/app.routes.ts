import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule





export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component'),
    },
    {
        path: 'chat',
        loadComponent: () => import('./pages/chat-page/chat-page.component')
    },
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks'
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/task/task.module').then((m) => m.TaskModule)
  },

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cabinet',
  // },
  // {
  //   path: '',
  //   pathMatch: 'prefix',
  //   canActivate: [AuthenticatedGuard],
  //   loadChildren: () => import('./pages/cabinet/cabinet.module').then((m) => m.CabinetModule),
  // },
  // {
  //   path: 'login',
  //   canActivate: [LoggedInGuard],
  //   loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/registration/registration-pages.module').then((m) => m.RegistrationPageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'premium-feat',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./premium-feat/premium-feat.module').then(
        (m) => m.PremiumFeatModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: !environment.production,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

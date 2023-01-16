import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumFeatComponent } from './premium-feat.component';
import { PremiumFeatGuard } from './premium-feat.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [PremiumFeatGuard],
    component: PremiumFeatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiumFeatRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumFeatRoutingModule } from './premium-feat-routing.module';
import { PremiumFeatComponent } from './premium-feat.component';


@NgModule({
  declarations: [
    PremiumFeatComponent
  ],
  imports: [
    CommonModule,
    PremiumFeatRoutingModule
  ]
})
export class PremiumFeatModule { }

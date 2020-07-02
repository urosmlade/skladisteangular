import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { StavkaComponent } from '../Komponente/stavka/stavka.component';
import { PocetnaComponent } from '../Komponente/pocetna/pocetna.component';
import { KupacComponent } from '../Komponente/kupac/kupac.component';
import { KupacDetaljiComponent } from '../Komponente/kupac-detalji/kupac-detalji.component';
import { PredracunComponent } from '../Komponente/predracun/predracun.component';
import { PredracunDetaljiComponent } from '../Komponente/predracun-detalji/predracun-detalji.component';
import { RacunComponent } from '../Komponente/racun/racun.component';
import { RacunDetaljiComponent } from '../Komponente/racun-detalji/racun-detalji.component';
import { PdfComponent } from '../Komponente/pdf/pdf.component';
import { PredracunNewComponent } from '../Komponente/predracun-new/predracun-new.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path:'pocetna',
    component:PocetnaComponent
  },
  {
    path:'proizvodi',
    component:StavkaComponent
  },
  {
    path:'kupci',
    component:KupacComponent
  },
  {
    path:'kupacdetalji',
    component:KupacDetaljiComponent
  },

  {
    path:'predracun',
    component:PredracunComponent
  },

  {
    path:'predracundetalji',
    component:PredracunDetaljiComponent
  },

  {
    path:'racun',
    component:RacunComponent
  },

  {
    path:'racundetalji',
    component:RacunDetaljiComponent
  },

  {
    path:'pdf',
    component:PdfComponent
  },
  {
    path:'predracunnew',
    component:PredracunNewComponent
  },


];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

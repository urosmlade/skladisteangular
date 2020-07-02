import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChartsModule } from 'ng2-charts';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RacunService } from '../Service/Racun.service';
import { StatistikaService } from '../Service/Statistika.service';
import { StavkaDijalogComponent } from './Dijalog/stavka-dijalog/stavka-dijalog.component';
import { KategorijaDijalogComponent } from './Dijalog/kategorija-dijalog/kategorija-dijalog.component';
import { ProizvodService } from '../Service/Proizvod.service';
import { KategorijaService } from '../Service/Kategorija.service';
import { PocetnaComponent } from './Komponente/pocetna/pocetna.component';
import { StavkaComponent } from './Komponente/stavka/stavka.component';
import { KupacComponent } from './Komponente/kupac/kupac.component';
import { KupacDijalogComponent } from './Dijalog/kupac-dijalog/kupac-dijalog.component';
import { KupacService } from '../Service/Kupac.service';
import { KupacDetaljiComponent } from './Komponente/kupac-detalji/kupac-detalji.component';
import { PredracunComponent } from './Komponente/predracun/predracun.component';
import { PredracunDetaljiComponent } from './Komponente/predracun-detalji/predracun-detalji.component';
import { PredracunDijalogComponent } from './Dijalog/predracun-dijalog/predracun-dijalog.component';
import { PredracunService } from '../Service/Predracun.service';
import { PoslodavacService } from '../Service/Poslodavac.service';
import { RacunComponent } from './Komponente/racun/racun.component';
import { RacunDetaljiComponent } from './Komponente/racun-detalji/racun-detalji.component';
import { RacunDijalogComponent } from './Dijalog/racun-dijalog/racun-dijalog.component';
import { PdfComponent } from './Komponente/pdf/pdf.component';
import { StavkaPredracunaService } from '../Service/Stavkapredracuna.service';
import { StavkaRacunaService } from '../Service/Stavkaracuna.service';
import { StavkaPredracunaComponent } from './Komponente/stavka-predracuna/stavka-predracuna.component';
import { StavkapredracunaDijalogComponent } from './Dijalog/stavkapredracuna-dijalog/stavkapredracuna-dijalog.component';
import { PredracunNewComponent } from './Komponente/predracun-new/predracun-new.component';
import { Kupac } from '../Model/kupac.modela';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent, 
    PocetnaComponent, 
    StavkaComponent, 
    StavkaDijalogComponent, 
    KategorijaDijalogComponent, 
    KupacComponent, 
    KupacDijalogComponent, 
    KupacDetaljiComponent, 
    PredracunComponent, 
    PredracunDetaljiComponent, 
    PredracunDijalogComponent, 
    RacunComponent, 
    RacunDetaljiComponent, 
    RacunDijalogComponent, 
    PdfComponent, 
    StavkaPredracunaComponent, 
    StavkapredracunaDijalogComponent, PredracunNewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ChartsModule,
    MatTooltipModule,
    MatCheckboxModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    },
    )          
  ],
  entryComponents:[StavkaDijalogComponent, KategorijaDijalogComponent, KupacDijalogComponent, PredracunDijalogComponent],
  providers: [Kupac,RacunService, StatistikaService, ProizvodService, KategorijaService, KupacService, PredracunService, PoslodavacService, StavkaPredracunaService, StavkaRacunaService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit, Inject } from '@angular/core';
import { Proizvod } from '../../../Model/proizvod.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StavkaPredracuna } from '../../../Model/stavkaPredracuna.model';
import { StavkaPredracunaService } from '../../../Service/Stavkapredracuna.service';
import { ProizvodService } from '../../../Service/Proizvod.service';
import { PredracunService } from '../../../Service/Predracun.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stavkapredracuna-dijalog',
  templateUrl: './stavkapredracuna-dijalog.component.html',
  styleUrls: ['./stavkapredracuna-dijalog.component.css']
})
export class StavkapredracunaDijalogComponent implements OnInit {

  proizvodi:Proizvod[];

  constructor(public dialogRef:MatDialogRef<StavkapredracunaDijalogComponent>,
              @Inject (MAT_DIALOG_DATA) public data:StavkaPredracuna,
              public stavkapredracunaService:StavkaPredracunaService,
              public proizvodService:ProizvodService,
              public predracunService:PredracunService,
              public snackBar:MatSnackBar) { }

  flag:number;
  uredu:boolean;
  ngOnInit() {
   this.ucitajStavke();
  }

  ucitajStavke(){
    this.proizvodService.sveStavke().subscribe(data=>{
      this.proizvodi = data;
    });
  }

  dodajStavku(){
    this.stavkapredracunaService.dodajStavku(this.data);
    this.snackBar.open('Uspesno ste dodali stavku', 'U redu', {duration:2500});
    this.dialogRef.close();
  }


}

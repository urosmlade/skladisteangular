import { Component, OnInit, Inject } from '@angular/core';
import { Kupac } from '../../../Model/kupac.modela';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Predracun } from '../../../Model/predracun.model';
import { RacunService } from '../../../Service/Racun.service';
import { KupacService } from '../../../Service/Kupac.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PredracunService } from '../../../Service/Predracun.service';

@Component({
  selector: 'app-racun-dijalog',
  templateUrl: './racun-dijalog.component.html',
  styleUrls: ['./racun-dijalog.component.css']
})
export class RacunDijalogComponent implements OnInit {

  flag:number;
  kupci:Kupac[];
  constructor(public dialogRef:MatDialogRef<RacunDijalogComponent>,
              @Inject (MAT_DIALOG_DATA) public data:Predracun,
              public racunService:RacunService,
              public kupacService:KupacService,
              public snackBar:MatSnackBar,
              public predracunService:PredracunService,
              //public racun:Racun
              ) { }


  placeno:string[] = ["Da", "Ne"];
  predracuni:Predracun[];


  ngOnInit() {
    this.kupacService.sviKupci().subscribe(data=>{
      this.kupci = data;
    })
    this.ucitajPredracune();
  }


ucitajPredracune(){
  this.predracunService.ucitajSvePredracuneNeplacene().subscribe(data=>{
    this.predracuni = data;
  })
}


  dodajFakturu(){

    this.racunService.dodajRacun(this.data);
    this.snackBar.open('Uspesno ste dodali racun','U redu',{duration:2000});
    this.dialogRef.close();
  }

}

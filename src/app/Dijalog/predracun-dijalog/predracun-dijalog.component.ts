import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kupac } from '../../../Model/kupac.modela';
import { Predracun } from '../../../Model/predracun.model';
import { PredracunService } from '../../../Service/Predracun.service';
import { KupacService } from '../../../Service/Kupac.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-predracun-dijalog',
  templateUrl: './predracun-dijalog.component.html',
  styleUrls: ['./predracun-dijalog.component.css']
})
export class PredracunDijalogComponent implements OnInit {

  flag:number;
  kupci:Kupac[];

  constructor(public dialogRef:MatDialogRef<PredracunDijalogComponent>,
              @Inject (MAT_DIALOG_DATA) public data:Predracun,
              public predracunService:PredracunService,
              public kupacService:KupacService,
              public snackBar:MatSnackBar,
              ) { }


  //placeno:string[] = ["Da", "Ne"];

  ngOnInit() {
    this.kupacService.sviKupci().subscribe(dataa=>{
      this.kupci = dataa;
    })
  }

  dodajPredracun(){
    this.predracunService.dodajPredracun(this.data);
    this.snackBar.open('Uspesno ste dodali predracun','U redu',{duration:2000});
    this.dialogRef.close();
  }


}

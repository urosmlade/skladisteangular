import { Component, OnInit, Inject } from '@angular/core';
import { Kupac } from '../../../Model/kupac.modela';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KupacService } from '../../../Service/Kupac.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-kupac-dialog',
  templateUrl: './kupac-dijalog.component.html',
  styleUrls: ['./kupac-dijalog.component.css']
})
export class KupacDijalogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Kupac,
              public kupacService:KupacService,
              public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<KupacDijalogComponent>) { }
  flag:number;
  ngOnInit() {
  }

  add(){
    this.kupacService.addKupac(this.data);
    this.snackBar.open('Uspesno ste dodali kupca','U redu',{duration:2000});
    this.dialogRef.close();
  }


  update(){
    this.kupacService.updateKupac(this.data);
    this.snackBar.open('Uspesno ste modifikovali kupca','U redu',{duration:2000});
    this.dialogRef.close();
  }

  delete(){
    this.kupacService.deleteKupac(this.data.id);
    this.snackBar.open('Uspesno ste obrisali kupca','U redu',{duration:2000});
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}

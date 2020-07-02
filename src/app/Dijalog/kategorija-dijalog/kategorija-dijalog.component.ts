import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Kategorija } from '../../../Model/Kategorija.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KategorijaService } from '../../../Service/Kategorija.service';

@Component({
  selector: 'app-kategorija-dijalog',
  templateUrl: './kategorija-dijalog.component.html',
  styleUrls: ['./kategorija-dijalog.component.css']
})
export class KategorijaDijalogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Kategorija,
  public dialog:MatDialogRef<KategorijaDijalogComponent>,
  public snackBar:MatSnackBar,
  public kategorijaService:KategorijaService) { }

ngOnInit() {

}

addKategorija(){
this.kategorijaService.addKategorija(this.data);
this.snackBar.open('Uspesno ste dodali kategoriju', 'U redu', {duration:2000});
this.dialog.close();
}

}

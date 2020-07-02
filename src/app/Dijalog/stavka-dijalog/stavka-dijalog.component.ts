import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proizvod } from '../../../Model/proizvod.model';
import { KategorijaService } from '../../../Service/Kategorija.service';
import { ProizvodService } from '../../../Service/Proizvod.service';
import { Kategorija } from '../../../Model/Kategorija.model';

@Component({
  selector: 'app-stavka-dijalog',
  templateUrl: './stavka-dijalog.component.html',
  styleUrls: ['./stavka-dijalog.component.css']
})
export class StavkaDijalogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<StavkaDijalogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:Proizvod,
    public kategorijaService:KategorijaService,
    public proizvodService:ProizvodService
    ){}
flag:number;
kategorije:Kategorija[];

ngOnInit() {
this.kategorijaService.sveKategorije().subscribe(data=>{
this.kategorije = data;
})
}

add(){
this.proizvodService.dodajStavku(this.data);
this.dialogRef.close();
}

update(){
this.proizvodService.modifikujStavku(this.data);
this.dialogRef.close();
}

delete(){
this.proizvodService.brisiStavku(this.data.id);
this.dialogRef.close();
}

cancel(){
this.dialogRef.close();
}

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProizvodService } from '../../../Service/Proizvod.service';
import { KategorijaService } from '../../../Service/Kategorija.service';
import { Proizvod } from '../../../Model/proizvod.model';
import { Kategorija } from '../../../Model/Kategorija.model';
import { StavkaDijalogComponent } from '../../Dijalog/stavka-dijalog/stavka-dijalog.component';
import { KategorijaDijalogComponent } from '../../Dijalog/kategorija-dijalog/kategorija-dijalog.component';

@Component({
  selector: 'app-stavka',
  templateUrl: './stavka.component.html',
  styleUrls: ['./stavka.component.css']
})
export class StavkaComponent implements OnInit {

  constructor(private proizvodService:ProizvodService, 
    private kategorijaService:KategorijaService,
    private dialog:MatDialog) { }

displayedColumns: string[] = ['id', 'naziv', 'cena','kolicina', 'gramaza','ukupnagramaza','kategorija', 'akcije'];
dataSource :MatTableDataSource<Proizvod>;
kategorije:Kategorija[];
stavke:Proizvod[];

@ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;



ngOnInit() {
this.loadData();
this.ucitajKategorije();
}

public loadData(){
this.proizvodService.sveStavke().subscribe(data => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
});
}

applyFilter(filterValue:string){
filterValue = filterValue.trim();
filterValue = filterValue.toLowerCase();
this.dataSource.filter = filterValue;
}

public ucitajKategorije(){
this.kategorijaService.sveKategorije().subscribe(data=>{
this.kategorije = data;
})
}


stavkaPoKategoriji(id:number){
this.proizvodService.stavkaPoKategoriji(id).subscribe(data=>{
this.stavke = data;
})
}

public openDialogn(flag:number){
  const dialogRef = this.dialog.open(StavkaDijalogComponent,{data:{}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
    this.loadData();
  })
}



public openDialog(flag:number, id:number, naziv:string, cena:number,  kolicina:number, gramaza:number, kategorijaBean:Kategorija){
const dialogRef = this.dialog.open(StavkaDijalogComponent,{data:{id:id, naziv:naziv, gramaza:gramaza, cena:cena, kolicina:kolicina, kategorijaBean:kategorijaBean}});
dialogRef.componentInstance.flag = flag;
dialogRef.afterClosed().subscribe(result=>{
this.loadData();
})
}

public dijalogKategorija(flag:number){
const dialogRef = this.dialog.open(KategorijaDijalogComponent, {data:{}});
dialogRef.afterClosed().subscribe(result=>{
this.ucitajKategorije();
})
}
}

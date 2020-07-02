import { Component, OnInit, ViewChild } from '@angular/core';
import { KupacService } from '../../../Service/Kupac.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Kupac } from '../../../Model/kupac.modela';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { KupacDijalogComponent } from '../../Dijalog/kupac-dijalog/kupac-dijalog.component';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private kupacService:KupacService, private dialog:MatDialog, public router:Router) { }
  dataSource :MatTableDataSource<Kupac>;
  displayedColumns : string[] = ['id','ime','prezime','email','telefon','firma','adresa','maticniBrojKupca','pibkupca','akcije'];
  
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.kupacService.sviKupci().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  openDialogn(flag:number){
    const dialogRef = this.dialog.open(KupacDijalogComponent, {data:{}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    })
  }

  openDialog(flag:number, id:number, ime:string, prezime:string, email:string, telefon:string, firma:string, adresakupca:string, maticnibrojkupca:number, pibkupca:number){
    const dialogRef = this.dialog.open(KupacDijalogComponent,{data:{id:id, ime:ime, prezime:prezime, email:email, telefon:telefon, firma:firma, adresakupca:adresakupca, maticnibrojkupca:maticnibrojkupca, pibkupca:pibkupca}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    })
  }

  applyFilter(filterValue:string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  selektujKupca(idKupca:string){
    this.router.navigate(['/kupacdetalji']);
    window.localStorage.setItem('kupac', idKupca);
  }

}

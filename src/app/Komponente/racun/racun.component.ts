import { Component, OnInit, ViewChild } from '@angular/core';
import { RacunService } from '../../../Service/Racun.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Racun } from '../../../Model/racun.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Predracun } from '../../../Model/predracun.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RacunDijalogComponent } from '../../Dijalog/racun-dijalog/racun-dijalog.component';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  constructor(private racunService:RacunService, private matDialog:MatDialog, private router:Router) { }
  displayedColumns :string[] = ['id','naziv','placeno','predracun','firma','akcije'];
  dataSource :MatTableDataSource<Racun>;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  racun:Racun[];

  selektovanRacun:Racun;
  predracuni:Predracun[];

  public selectRow(row){
    this.selektovanRacun = row;
  }

  ngOnInit() {
    this.ucitajSveRacune();
  }

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  applyFilter(filterValue:string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  ucitajSveRacune(){
    this.racunService.ucitajSveRacune().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });
  }



  openDialog(flag:number){
    const dialogRef = this.matDialog.open(RacunDijalogComponent);
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      this.ucitajSveRacune();
    })
  }




  selektujRacun(idPredracuna:string){
    this.router.navigate(['/racundetalji']);
    window.localStorage.setItem('predracun', idPredracuna);
  }



}

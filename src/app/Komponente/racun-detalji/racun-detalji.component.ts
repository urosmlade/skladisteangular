import { Component, OnInit } from '@angular/core';
import { RacunService } from '../../../Service/Racun.service';
import { Racun } from '../../../Model/racun.model';
import { MatTableDataSource } from '@angular/material/table';
import { Predracun } from '../../../Model/predracun.model';

@Component({
  selector: 'app-racun-detalji',
  templateUrl: './racun-detalji.component.html',
  styleUrls: ['./racun-detalji.component.css']
})
export class RacunDetaljiComponent implements OnInit {

  displayedColumns :string[] = ['id','naziv'];

  constructor(private racunService:RacunService) { }
  dataSource :MatTableDataSource<Racun>;

  racun:Racun;
  racuni:Racun[];

  ngOnInit() {
    this.sviPredracuni();
    this.ucitajJedanPredracun();

  }

  sviPredracuni(){
    this.racunService.ucitajSveRacune().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  selektovanPredracun:Predracun;

  public selectRow(row){
    this.selektovanPredracun = row;
  }


  ucitajJedanPredracun(){
    this.racunService.jedanRacunM(Number(localStorage.getItem('predracun'))).subscribe(data=>{
      this.racun = data;
    })
  }

  postaviPredracunLS(id:string){
    localStorage.setItem('predracun',id);
    this.ucitajJedanPredracun();
  }

}

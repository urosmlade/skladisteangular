import { Component, OnInit } from '@angular/core';
import { PredracunService } from '../../../Service/Predracun.service';
import { Predracun } from '../../../Model/predracun.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-predracun-detalji',
  templateUrl: './predracun-detalji.component.html',
  styleUrls: ['./predracun-detalji.component.css']
})
export class PredracunDetaljiComponent implements OnInit {
  displayedColumns :string[] = ['id','naziv'];

  constructor(private predracunService:PredracunService) { }
  dataSource :MatTableDataSource<Predracun>;

  predracuni:Predracun[];
  predracun:Predracun;

  ngOnInit() {
    this.sviPredracuni();
    this.ucitajJedanPredracun();

  }

  sviPredracuni(){
    this.predracunService.ucitajSvePredracuneM().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }



  
  selektovanPredracun:Predracun;

  public selectRow(row){
    this.selektovanPredracun = row;
  }


  ucitajJedanPredracun(){
    this.predracunService.jedanPredracunM(Number(localStorage.getItem('predracun'))).subscribe(data=>{
      this.predracun = data;
    })
  }

  postaviPredracunLS(id:string){
    localStorage.setItem('predracun',id);
    this.ucitajJedanPredracun();
  }

}

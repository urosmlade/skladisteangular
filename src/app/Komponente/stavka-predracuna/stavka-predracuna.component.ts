import { Component, OnInit, Input } from '@angular/core';
import { StavkaPredracunaService } from '../../../Service/Stavkapredracuna.service';
import { PoslodavacService } from '../../../Service/Poslodavac.service';
import { MatDialog } from '@angular/material/dialog';
import { Predracun } from '../../../Model/predracun.model';
import { Observable } from 'rxjs';
import { StavkaPredracuna } from '../../../Model/stavkaPredracuna.model';
import { Poslodavac } from '../../../Model/poslodavac.model';
import { Racun } from '../../../Model/racun.model';
import { StavkapredracunaDijalogComponent } from '../../Dijalog/stavkapredracuna-dijalog/stavkapredracuna-dijalog.component';

@Component({
  selector: 'app-stavka-predracuna',
  templateUrl: './stavka-predracuna.component.html',
  styleUrls: ['./stavka-predracuna.component.css']
})
export class StavkaPredracunaComponent implements OnInit {

  constructor(private stavkaPredracunaService:StavkaPredracunaService, private poslodavacService:PoslodavacService, private dialog:MatDialog) { }
  
  displayedColumns :string[] = ['id','proizvodBean','kolicina','cenapojed','gramaza','vrednostbezpdv', 'stopapdv','vrednostpdv','vrednostsapdv',];
  
  @Input() selektovanPredracun:Predracun;

  dataSource : Observable<StavkaPredracuna[]>;
  dataSourcePoslodavac : Poslodavac;
  fakturica:Racun;

  gdesamb:boolean;
  ngOnInit() {
    this.loadData();
    if(localStorage.getItem('gdesam')=='predracun'){
      this.displayedColumns.push('akcije');
      return this.gdesamb = true;
    }else if(localStorage.getItem('gdesam')=='racun'){
      this.displayedColumns.pop();
      return this.gdesamb = false;
    }
  }

  ngOnChanges(){
    if(this.selektovanPredracun.id){
      this.loadData();
    }
  }





  loadData(){
    this.dataSource = this.stavkaPredracunaService.ucitajSveStavkePredracuna(this.selektovanPredracun.id);
    this.poslodavacService.ucitajPoslodavca().subscribe(data=>{
      this.dataSourcePoslodavac = data;
    });
  }


  public openDialog(flag:number, predracunBean:Predracun){
    const dialogRef = this.dialog.open(StavkapredracunaDijalogComponent, {data:{predracunBean:predracunBean}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    })
  }

}

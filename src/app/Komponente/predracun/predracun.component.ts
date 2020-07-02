import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Predracun } from '../../../Model/predracun.model';
import { PredracunDijalogComponent } from '../../Dijalog/predracun-dijalog/predracun-dijalog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Poslodavac } from '../../../Model/poslodavac.model';
import { PredracunService } from '../../../Service/Predracun.service';
import { PoslodavacService } from '../../../Service/Poslodavac.service';

@Component({
  selector: 'app-predracun',
  templateUrl: './predracun.component.html',
  styleUrls: ['./predracun.component.css']
})
export class PredracunComponent implements OnInit {

  constructor(private predracunService:PredracunService, 
    private matDialog:MatDialog,
    private router:Router,
    private poslodavacService:PoslodavacService) { }

displayedColumns :string[] = ['id','naziv','placeno','racunotpremnicabroj','firma','akcije'];
dataSource :MatTableDataSource<Predracun>;

poslodavac:Poslodavac;
predracuni:Predracun[];

ngOnInit() {
this.ucitajSvePredracune();
this.poslodavacService.ucitajPoslodavca().subscribe(data=>{
this.poslodavac = data;

})
}

@ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;

applyFilter(filterValue:string){
filterValue = filterValue.trim();
filterValue = filterValue.toLowerCase();
this.dataSource.filter = filterValue;
}

ucitajSvePredracune(){
this.predracunService.ucitajSvePredracuneM().subscribe(data=>{
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
});
}

selektovanPredracun:Predracun;

public selectRow(row){
this.selektovanPredracun = row;
}


openDialog(flag:number){
const dialogRef = this.matDialog.open(PredracunDijalogComponent,{data:{}});
dialogRef.componentInstance.flag = flag;
dialogRef.afterClosed().subscribe(result=>{
this.ucitajSvePredracune();
})
}

selektujPredracun(idPredracuna:string){
this.router.navigate(['/predracundetalji']);
window.localStorage.setItem('predracun', idPredracuna);
}

pdfIzgled(id:string){
localStorage.setItem('pdf',id);
}

}

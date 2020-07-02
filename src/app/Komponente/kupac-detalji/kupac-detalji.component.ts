import { Component, OnInit } from '@angular/core';
import { KupacService } from '../../../Service/Kupac.service';
import { RacunService } from '../../../Service/Racun.service';
import { StatistikaService } from '../../../Service/Statistika.service';
import { Kupac } from '../../../Model/kupac.modela';
import { Racun } from '../../../Model/racun.model';
import { TrosakKupcaPoMesecima } from '../../../Model/trosakKupcaPoMesecima.model';

@Component({
  selector: 'app-kupac-detalji',
  templateUrl: './kupac-detalji.component.html',
  styleUrls: ['./kupac-detalji.component.css']
})
export class KupacDetaljiComponent implements OnInit {

  constructor(private kupacService:KupacService,
    private racunservice:RacunService,
    private statistikaService:StatistikaService
    ) { }

kupci:Kupac[];
kupac:Kupac;
racuni:Racun[];
trosak:number[];
mesectrosak:TrosakKupcaPoMesecima[];
meseci:number[] = [];
troskovi:number[] = [];

ngOnInit() {
this.sviKupci();
this.ucitajJednogKupca();
this.ucitajFaktureKupca();
this.ucitajTrosak();
this.ucitajTroskoveKupcaPoMesecu();


setTimeout(() => {
console.log('TROSAK' +'  '+this.trosak);

this.refreshData();

console.log("MESECI  " + this.meseci);
console.log("TROSKOVI  " + this.troskovi);


}, 200);

}

isprazniData(){
this.meseci.length = 0;
this.troskovi.length = 0;
}

refreshData(){

for (let index = 0; index < this.mesectrosak.length; index++) {
this.meseci.push(this.mesectrosak[index][0]);
this.troskovi.push(this.mesectrosak[index][1]);
}

}


sviKupci(){
this.kupacService.sviKupci().subscribe(data=>{
this.kupci = data;
})
}

ucitajTrosak(){
this.statistikaService.trosakKupca(Number(localStorage.getItem('kupac'))).subscribe(data=>{
this.trosak = data;
})
}

postaviKupcaLS(id:string){
localStorage.setItem('kupac',id);
this.ucitajJednogKupca();
this.ucitajFaktureKupca();
this.ucitajTrosak();
this.ucitajTroskoveKupcaPoMesecu();
this.isprazniData();
setTimeout(() => {
this.refreshData();  
}, 100);

}


ucitajJednogKupca(){
this.kupacService.jedanKupac(Number(localStorage.getItem('kupac'))).subscribe(data=>{
this.kupac = data;
});
}



/*
postaviFakturuLS(id:string){
localStorage.setItem('faktura',id);
this.ucitajTrosak();
}
*/


ucitajFaktureKupca(){
this.racunservice.ucitajSveRacunePoKupcu(Number(localStorage.getItem('kupac'))).subscribe(data=>{
this.racuni = data;
})
}


ucitajTroskoveKupcaPoMesecu(){
this.statistikaService.trosakKupcaPoMesecu(Number(localStorage.getItem('kupac'))).subscribe(data=>{
this.mesectrosak = data;
})
}


public barChartOptions = {
scaleShowVerticalLines: false,
responsive: true
};

public barChartLabels = this.meseci;
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
{data: this.troskovi, label: 'Series A'},
];


}

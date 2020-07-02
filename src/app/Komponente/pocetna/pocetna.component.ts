import { Component, OnInit } from '@angular/core';
import { RacunService } from '../../../Service/Racun.service';
import { StatistikaService } from '../../../Service/Statistika.service';
import { TrosakKupcaPoMesecima } from '../../../Model/trosakKupcaPoMesecima.model';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private racunservice:RacunService, private statistikaService:StatistikaService) { }

  ngOnInit() {
    this.ukupnoRazNaSklM();
    this.ukupnoNaSklM();
    this.ukupnoKupacaM();
    this.ukupnaZaradaM();
    this.zaradaPoMesecimaM();
    
    setTimeout(() => {
      this.refreshData();
    }, 200);

  }

  ukupnoRazlicitihProizvoda:number;
  ukupnoProizvoda:number;
  ukupnoKupaca:number;
  ukupnaZarada:number;

  mesectrosak:TrosakKupcaPoMesecima[];
  meseci:number[] = [];
  troskovi:number[] = [];


  ukupnoRazNaSklM(){
    this.statistikaService.ukupnoRazlicitihStavkiM().subscribe(data=>{
      this.ukupnoRazlicitihProizvoda = data;
    });
  }

  ukupnoNaSklM(){
    this.statistikaService.ukupnoStavkiM().subscribe(data=>{
      this.ukupnoProizvoda = data;
    })
  }

  ukupnoKupacaM(){
    this.statistikaService.ukupnoKupacaM().subscribe(data=>{
      this.ukupnoKupaca = data;
    })
  }

  ukupnaZaradaM(){
    this.statistikaService.ukupnaZaradaM().subscribe(data=>{
      this.ukupnaZarada = data;
    })
  }

  zaradaPoMesecimaM(){
    this.statistikaService.ukupnaZaradaPoMesecimaM().subscribe(data=>{
      this.mesectrosak = data;
    })
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

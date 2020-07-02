import { Proizvod } from './proizvod.model';
import { Racun } from './racun.model';

export class StavkaRacuna {

     id:number;
   //jedMere:string;
     kolicina:number;
     //cenapojed:number;
     vrednostbezpdv:number;
     stopapdv:number;
     vrednostpdv:number;
     vrednostsapdv:number;
     predracunBean:Racun;
     stavkaBean:Proizvod;
     //maticnibroj:number;
 }

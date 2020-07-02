import { Proizvod } from './proizvod.model';
import { Predracun } from './predracun.model';

export class StavkaPredracuna {

     id:number;
   //jedMere:string;
     kolicina:number;
     //cenapojed:number;
     vrednostbezpdv:number;
     stopapdv:number;
     vrednostpdv:number;
     vrednostsapdv:number;
     predracunBean:Predracun;
     proizvodBean:Proizvod;
     //maticnibroj:number;
 }

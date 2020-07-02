import { Poslodavac } from './poslodavac.model';
import { Kupac } from './kupac.modela';
import { Predracun } from './predracun.model';


export class Racun {
    id:number;
    poslodavacBean:Poslodavac
    naziv:string;
    //maticnibroj:number;
    datumizdavanjaracuna:Date;
    //mestoizdavanjaracuna:string;
    datumprometadobara:Date;
    //pibposlodavca:number;
    kupacBean:Kupac;
    //adresakupca:string;
    //maticnibrojkupca:number;
    //pibkupca:number;
    racunotpremnicabroj:number;
    placeno:string;
    //ukupnavrednostbezpdv:number;
   // ukupnavrednostpdvpostopi:number;
    //ukupnavrednostsapdvzauplatu:number;
    predracunBean:Predracun;
}
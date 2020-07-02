import { Poslodavac } from './poslodavac.model';
import { Kupac } from './kupac.modela';

export class Predracun {
    id:number;
    poslodavacBean:Poslodavac
    naziv:string;
    datumizdavanjaracuna:Date;
    datumprometadobara:Date;
    kupacBean:Kupac;
    racunotpremnicabroj:number;
    placeno:string;
}
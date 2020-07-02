import { Kategorija } from "./Kategorija.model";

export class Proizvod {
    id:number;
    naziv:string;
    kolicina:number;
    cena:number;
    kategorijaBean:Kategorija;    
    gramaza:number;
}
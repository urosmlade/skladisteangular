import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrosakKupcaPoMesecima } from '../Model/trosakKupcaPoMesecima.model';

@Injectable()
export class StatistikaService{

    troskoviKupcaUrl = 'http://localhost:8083/cenaracuna/';
    troskoviKupcaPoDatumuUrl = 'http://localhost:8083/cenapredracunapomesecima/';
    ukupnoStavkiUrl = 'http://localhost:8083/ukupnoproizvoda';
    ukupnoRazlicitihStavkiUrl = 'http://localhost:8083/ukupnorazlicitihproizvoda';
    ukupnoKupacaUrl = 'http://localhost:8083/ukupnokupaca';
    ukupnazaradaUrl = 'http://localhost:8083/ukupnazaradaracuna';
    ukupnaZaradaPoMesecimaUrl = 'http://localhost:8083/ukupnazaradapomesecimapredracun';

    ukupnaZaradaPoPredracunuBezPdvUrl = 'http://localhost:8083/ukupnazaradapopredracunubezpdv/';
    ukupnaZaradaPoPredracunuSaPdvUrl = 'http://localhost:8083/ukupnazaradapopredracunusapdv/';

    ukupnoPdvPoPredracunuUrl = 'http://localhost:8083/ukupnopdvpopredracunu/';


    trosakKupcaPoFakturi:BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    trosakKupcaPoFakturiPoMesecima:BehaviorSubject<TrosakKupcaPoMesecima[]> = new BehaviorSubject<TrosakKupcaPoMesecima[]>([]);
    ukupnoRazlicitihStavki:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnoStavki:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnoKupaca:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnazarada:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnazaradapomesecima:BehaviorSubject<TrosakKupcaPoMesecima[]> = new BehaviorSubject<TrosakKupcaPoMesecima[]>(null);
    ukupnaZaradaPoPredracunuBezPdv:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnaZaradaPoPredracunuSaPdv:BehaviorSubject<number> = new BehaviorSubject<number>(null);
    ukupnopdvpopredracunu:BehaviorSubject<number> = new BehaviorSubject<number>(null);

    constructor(private httpClient:HttpClient){}

    public trosakKupca(id:number):Observable<number[]>{
        this.httpClient.get<number[]>(this.troskoviKupcaUrl + id).subscribe(data=>{
            this.trosakKupcaPoFakturi.next(data);
        })
        return this.trosakKupcaPoFakturi.asObservable();
    }



    public trosakKupcaPoMesecu(id:number):Observable<TrosakKupcaPoMesecima[]>{
        this.httpClient.get<TrosakKupcaPoMesecima[]>(this.troskoviKupcaPoDatumuUrl + id).subscribe(data=>{
            this.trosakKupcaPoFakturiPoMesecima.next(data);
        })
        return this.trosakKupcaPoFakturiPoMesecima.asObservable();
    }



    public ukupnoRazlicitihStavkiM():Observable<number>{
        this.httpClient.get<number>(this.ukupnoRazlicitihStavkiUrl).subscribe(data=>{
            this.ukupnoRazlicitihStavki.next(data);
        })
        return this.ukupnoRazlicitihStavki.asObservable();
    }



    public ukupnoStavkiM():Observable<number>{
        this.httpClient.get<number>(this.ukupnoStavkiUrl).subscribe(data=>{
            this.ukupnoStavki.next(data);
        })
        return this.ukupnoStavki.asObservable();
    }

    public ukupnoKupacaM():Observable<number>{
        this.httpClient.get<number>(this.ukupnoKupacaUrl).subscribe(data=>{
            this.ukupnoKupaca.next(data);
        })
        return this.ukupnoKupaca.asObservable();
    }

    public ukupnaZaradaM():Observable<number>{
        this.httpClient.get<number>(this.ukupnazaradaUrl).subscribe(data=>{
            this.ukupnazarada.next(data);
        })
        return this.ukupnazarada.asObservable();
    }

    public ukupnaZaradaPoMesecimaM():Observable<TrosakKupcaPoMesecima[]>{
        this.httpClient.get<TrosakKupcaPoMesecima[]>(this.ukupnaZaradaPoMesecimaUrl).subscribe(data=>{
            this.ukupnazaradapomesecima.next(data);
        })
        return this.ukupnazaradapomesecima.asObservable();
    }



    public ukupnaZaradaPoPredracunuBezPdvM(id:number):Observable<number>{
        this.httpClient.get<number>(this.ukupnaZaradaPoPredracunuBezPdvUrl + id).subscribe(data=>{
            this.ukupnaZaradaPoPredracunuBezPdv.next(data);
        })
        return this.ukupnaZaradaPoPredracunuBezPdv.asObservable();
    }



    public ukupnaZaradaPoPredracunuSaPdvM(id:number):Observable<number>{
        this.httpClient.get<number>(this.ukupnaZaradaPoPredracunuSaPdvUrl + id).subscribe(data=>{
            this.ukupnaZaradaPoPredracunuSaPdv.next(data);
        })
        return this.ukupnaZaradaPoPredracunuSaPdv.asObservable();
    }


   public ukupnoPdvPoPredracunuM(id:number):Observable<number>{
        this.httpClient.get<number>(this.ukupnoPdvPoPredracunuUrl + id).subscribe(data=>{
            this.ukupnopdvpopredracunu.next(data);
        })
        return this.ukupnopdvpopredracunu.asObservable();
    }




}
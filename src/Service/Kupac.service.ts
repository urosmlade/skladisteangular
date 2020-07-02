import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Kupac } from '../Model/kupac.modela';

@Injectable()
export class KupacService{

    url = 'http://localhost:8083/kupac/';

    kupci:BehaviorSubject<Kupac[]> = new BehaviorSubject<Kupac[]>([]);
    kupac:BehaviorSubject<Kupac> = new BehaviorSubject<Kupac>(null);


    constructor(private httpClient:HttpClient){}

    public sviKupci():Observable<Kupac[]>{
        this.httpClient.get<Kupac[]>(this.url).subscribe(data=>{
            this.kupci.next(data);
        })
        return this.kupci.asObservable();   
    }

    jedanKupac(id:number):Observable<Kupac>{
        this.httpClient.get<Kupac>(this.url + id).subscribe(data=>{
            this.kupac.next(data);
        })
        return this.kupac.asObservable();
    }




    addKupac(kupac:Kupac){
        this.httpClient.post(this.url,kupac).subscribe();
    }


    updateKupac(kupac:Kupac){
        this.httpClient.put(this.url + kupac.id,kupac).subscribe();
    }

    deleteKupac(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }

}
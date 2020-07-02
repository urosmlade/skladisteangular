import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proizvod } from '../Model/proizvod.model';

@Injectable()
export class ProizvodService{

    
    private url = "http://localhost:8083/proizvod/";
    private url2 = "http://localhost:8083/proizvodi/";

    stavka:BehaviorSubject<Proizvod[]> = new BehaviorSubject<Proizvod[]>([]);
    constructor (private httpClient:HttpClient){}

    public sveStavke():Observable<Proizvod[]>{
        this.httpClient.get<Proizvod[]> (this.url).subscribe(data=>{
            this.stavka.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.stavka.asObservable();
    }


    public stavkaPoKategoriji(id:number):Observable<Proizvod[]>{
        this.httpClient.get<Proizvod[]> (this.url2 + id).subscribe(data=>{
            this.stavka.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.stavka.asObservable();
    }



    public modifikujStavku(proizvod:Proizvod){
        this.httpClient.put(this.url + proizvod.id,proizvod).subscribe();
    }
    

    public dodajStavku(proizvod:Proizvod){
        this.httpClient.post(this.url,proizvod).subscribe();
    }


    public brisiStavku(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { StavkaRacuna } from '../Model/stavkaRacuna.model';

@Injectable()
export class StavkaRacunaService{

    private url = 'http://localhost:8083/stavkaracuna/';


    constructor(private httpClient:HttpClient){}

    faktura:BehaviorSubject<StavkaRacuna[]> = new BehaviorSubject<StavkaRacuna[]>([]);

    public ucitajSveStavkeRacuna(id:number):Observable<StavkaRacuna[]>{
        this.httpClient.get<StavkaRacuna[]> (this.url + id).subscribe(data=>{
            this.faktura.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.faktura.asObservable();
    };


    public dodajStavku(stavka:StavkaRacuna){
        this.httpClient.post(this.url,stavka).subscribe();
    }
    
}
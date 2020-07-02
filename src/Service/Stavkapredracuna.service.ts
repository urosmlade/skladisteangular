import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { StavkaPredracuna } from '../Model/stavkaPredracuna.model';

@Injectable()
export class StavkaPredracunaService{

    private url = 'http://localhost:8083/stavkapredracuna/';


    constructor(private httpClient:HttpClient){}

    faktura:BehaviorSubject<StavkaPredracuna[]> = new BehaviorSubject<StavkaPredracuna[]>([]);

    public ucitajSveStavkePredracuna(id:number):Observable<StavkaPredracuna[]>{
        this.httpClient.get<StavkaPredracuna[]> (this.url + id).subscribe(data=>{
            this.faktura.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.faktura.asObservable();
    };


    public dodajStavku(stavka:StavkaPredracuna){
        this.httpClient.post(this.url,stavka).subscribe();
    }
    
}
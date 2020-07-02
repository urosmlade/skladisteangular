import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Kategorija } from '../Model/kategorija.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class KategorijaService{

    private url = "http://localhost:8083/kategorija/";
    constructor (private httpClient:HttpClient){}

    kategorije:BehaviorSubject<Kategorija[]> = new BehaviorSubject<Kategorija[]>([]);

    public sveKategorije():Observable<Kategorija[]>{
        this.httpClient.get<Kategorija[]> (this.url).subscribe(data=>{
            this.kategorije.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.kategorije.asObservable();
    }

    public addKategorija(kategorija:Kategorija){
        this.httpClient.post(this.url,kategorija).subscribe();
    }



}
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Racun } from '../Model/racun.model';
import { Predracun } from '../Model/predracun.model';

@Injectable()
export class RacunService{

    private url = 'http://localhost:8083/racun/';
    private url2 = 'http://localhost:8083/racunkupac/';


    constructor(private httpClient:HttpClient){}

    racuni:BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);
    racun:BehaviorSubject<Racun> = new BehaviorSubject<Racun>(null);


    public ucitajSveRacune():Observable<Racun[]>{
        this.httpClient.get<Racun[]> (this.url).subscribe(data=>{
            this.racuni.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.racuni.asObservable();
    };



    public ucitajSveRacunePoKupcu(id:number):Observable<Racun[]>{
        this.httpClient.get<Racun[]> (this.url2 + id).subscribe(data=>{
            this.racuni.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.racuni.asObservable();
    };



    jedanRacunM(id:number):Observable<Racun>{
        this.httpClient.get<Racun>(this.url + id).subscribe(data=>{
            this.racun.next(data);
        })
        return this.racun.asObservable();
    }



    public dodajRacun(racun:Predracun){
        this.httpClient.post(this.url,racun).subscribe();
    }


  
}
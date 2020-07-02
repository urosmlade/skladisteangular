import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Poslodavac } from '../Model/poslodavac.model';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable()
export class PoslodavacService{

    url = 'http://localhost:8083/poslodavac/1';

    poslodavac:BehaviorSubject<Poslodavac> = new BehaviorSubject<Poslodavac>(null);
    constructor (private httpClient:HttpClient){}


    public ucitajPoslodavca():Observable<Poslodavac>{
        this.httpClient.get<Poslodavac> (this.url).subscribe(data=>{
            this.poslodavac.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.poslodavac.asObservable();
    }

}
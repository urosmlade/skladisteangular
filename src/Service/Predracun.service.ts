import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Predracun } from '../Model/predracun.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PredracunService{

    private url = 'http://localhost:8083/predracun/';
    private url2 = 'http://localhost:8083/predracunkupac/';

    private urlneplaceno = '    http://localhost:8083/neplacenipredracun';


    constructor(private httpClient:HttpClient){}

    predracuni:BehaviorSubject<Predracun[]> = new BehaviorSubject<Predracun[]> ([]); 
    predracun:BehaviorSubject<Predracun> = new BehaviorSubject<Predracun>(null);


    public ucitajSvePredracuneM():Observable<Predracun[]>{
        this.httpClient.get<Predracun[]> (this.url).subscribe(data=>{
            this.predracuni.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.predracuni.asObservable();
    };

    


    public ucitajSvePredracunePoKupcuM(id:number):Observable<Predracun[]>{
        this.httpClient.get<Predracun[]> (this.url2 + id).subscribe(data=>{
            this.predracuni.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.predracuni.asObservable();
    };



    public ucitajSvePredracuneNeplacene():Observable<Predracun[]>{
        this.httpClient.get<Predracun[]> (this.urlneplaceno).subscribe(data=>{
            this.predracuni.next(data);
        },
        (error:HttpErrorResponse)=>{
            (console.log(error.name + ' ' + error.message));
        });
        return this.predracuni.asObservable();
    };





    jedanPredracunM(id:number):Observable<Predracun>{
        this.httpClient.get<Predracun>(this.url + id).subscribe(data=>{
            this.predracun.next(data);
        })
        return this.predracun.asObservable();
    }


    public dodajPredracun(predracun:Predracun){
        this.httpClient.post(this.url,predracun).subscribe();
    }


}
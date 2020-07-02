import { Component, OnInit } from '@angular/core';
import { KupacService } from '../../../Service/Kupac.service';
import { Kupac } from '../../../Model/kupac.modela';

@Component({
  selector: 'app-predracun-new',
  templateUrl: './predracun-new.component.html',
  styleUrls: ['./predracun-new.component.css']
})
export class PredracunNewComponent implements OnInit {

  constructor(private kupacService:KupacService, private kupac:Kupac) { }

  kupci:Kupac[];

  ngOnInit(): void {
    this.ucitajSveKupce();
    console.log(this.kupac)
  }


  ucitajSveKupce(){
    this.kupacService.sviKupci().subscribe(data=>{
      this.kupci = data;
    })
  }




}

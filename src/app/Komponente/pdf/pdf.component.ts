import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PoslodavacService } from '../../../Service/Poslodavac.service';
import { PredracunService } from '../../../Service/Predracun.service';
import { StavkaPredracunaService } from '../../../Service/Stavkapredracuna.service';
import { StatistikaService } from '../../../Service/Statistika.service';
import { Poslodavac } from '../../../Model/poslodavac.model';
import { Predracun } from '../../../Model/predracun.model';
import { StavkaPredracuna } from '../../../Model/stavkaPredracuna.model';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

//declare var jsPDF: any;


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private poslodavacService:PoslodavacService,
    private predracunService:PredracunService,
    private stavkaPredracunaService:StavkaPredracunaService,
    private statistikaService:StatistikaService) {}

displayedColumns = ['id','proizvodBean','kolicina','cenapojed','vrednostbezpdv', 'stopapdv','vrednostpdv','vrednostsapdv'];


pdfIdLS:number;
poslodavac:Poslodavac;
predracun:Predracun;

dataSource : MatTableDataSource<StavkaPredracuna>;

ukupnaZaradaBezPdv:number;
ukupnaZaradaSaPdv:number;
ukupnoPdv:number;

dtasrc:any[] = [
{
"id": 1,
"kolicina": 50,
"stopapdv": 20,
"vrednostbezpdv": 5000,
"vrednostpdv": 1000,
"vrednostsapdv": 6000,
"predracunBean": 1,
"proizvodBean": 1
}
];

@ViewChild("logo", {static:false}) logo:ElementRef;
@ViewChild("tabela", {static:false}) tabela:ElementRef;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


ngOnInit() {
this.ucitajID();
this.ucitajPoslodavca();
this.ucitajPredracun();
this.loadData();

this.stavkaPredracunaService.ucitajSveStavkePredracuna(Number(localStorage.getItem('predracun'))).subscribe(data=>{
this.dtasrc = data;
})

}



ucitajUkupnuCenuPredracuna(){
this.statistikaService.ukupnaZaradaPoPredracunuBezPdvM(Number(localStorage.getItem('predracun'))).subscribe(data=>{
this.ukupnaZaradaBezPdv = data;
});

this.statistikaService.ukupnaZaradaPoPredracunuSaPdvM(Number(localStorage.getItem('predracun'))).subscribe(data=>{
this.ukupnaZaradaSaPdv = data;
})

this.statistikaService.ukupnoPdvPoPredracunuM(Number(localStorage.getItem('predracun'))).subscribe(data=>{
this.ukupnoPdv = data;
})


}



loadData(){
this.stavkaPredracunaService.ucitajSveStavkePredracuna(Number(localStorage.getItem('pdf'))).subscribe(data=>{
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.ucitajUkupnuCenuPredracuna();
}


ucitajID(){
this.pdfIdLS = (Number(localStorage.getItem('pdf')));
}


ucitajPoslodavca(){
this.poslodavacService.ucitajPoslodavca().subscribe(data=>{
this.poslodavac = data;
})
}

ucitajPredracun(){
this.predracunService.jedanPredracunM(this.pdfIdLS).subscribe(data=>{
this.predracun = data;
})
}

/*
getBase64Image(img){
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
var ctx = canvas.getContext("2d");
ctx.drawImage(img,0,0);
var dataURL = canvas.toDataURL("image/png");
return dataURL;

}
*/

pagNext(){
this.dataSource.paginator.nextPage();
}

ngOnChanges(){
this.pagNext();
}
/*
test(){
for (let index = 1; index < poslednjastrana; index++) {
console.log('macarena')
console.log("STABREALOBRE")
this.dataSource.paginator.nextPage(); 

doc.addPage();
doc.addImage(img,'PDF',0,0,210,297);
console.log(strana)
strana++;
}
*/
downloadPdf(){

console.log(this.dtasrc);

let columns = [
{title: "id", dataKey: "id"},
{title: "proizvod", dataKey: "proizvod"},
{title: "kolicina", dataKey: "kolicina"},
{title: "cenapokomadu", dataKey: "cenapokomadu"},
{title: "vrbezpdv", dataKey: "vrbezpdv"},
{title: "stopapdv", dataKey: "stopapdv"},
{title: "vrpdv", dataKey: "vrpdv"},
{title: "vrsapdv", dataKey: "vrsapdv"},
];

let rows = [

];


for (let index = 0; index < this.dtasrc.length; index++) {
rows.push({"id": this.dtasrc[index].id, "proizvod": this.dtasrc[index].proizvodBean.id, "kolicina": this.dtasrc[index].proizvodBean.kolicina,"cenapokomadu":this.dtasrc[index].proizvodBean.cena,"vrbezpdv":this.dtasrc[index].vrednostbezpdv,"stopapdv":this.dtasrc[index].stopapdv,"vrpdv":this.dtasrc[index].vrednostpdv,"vrsapdv":this.dtasrc[index].vrednostsapdv})
}



var doc = new jsPDF('p','pt');
doc.setFontSize(20);
doc.text('Predracun',300,50);
doc.setFontSize(15);
doc.text(this.predracun.racunotpremnicabroj.toString(),400,50);

doc.setFontSize(10);

doc.text('Poslodavac',50,150);
doc.line(110,100,110,190);
doc.text('Joval Plast',120,120);
doc.text('Kralja Petra 30, 22330 Nova Pazova',120,140);
doc.text('jovalplast.zp@gmail.com',120,160);
doc.text('0654420442',120,180);

doc.text('Kupac',300,150);
doc.line(360,100,360,190);
doc.text(this.predracun.kupacBean.firma,370,120);
doc.text(this.predracun.kupacBean.adresakupca,370,140);
doc.text(this.predracun.kupacBean.email,370,160);
doc.text(this.predracun.kupacBean.telefon,370,180);

doc.autoTable(columns,rows,{
theme:'plain',
startY:230
});

let yc = doc.lastAutoTable.finalY;
doc.text('Ukupna cena bez PDV-a', 300, yc + 50);
doc.text(this.ukupnaZaradaBezPdv.toString(), 450, yc +50);

doc.text('Ukupan PDV', 300,yc +80);
doc.text(this.ukupnoPdv.toString(), 450,yc +80);

doc.text('Ukupna cena sa PDV-om', 300, yc +110);
doc.text(this.ukupnaZaradaSaPdv.toString(), 450,yc +110);


doc.setLineWidth(1.0); 
doc.setDrawColor(0,0,0);  
doc.text('Potpis poslodavca',50,yc+150);
doc.line(50,yc+190,150,yc+190);


doc.text('Potpis kupca',200,yc+150);
doc.line(200,yc+190,350,yc+190);


doc.save('Predracun' + this.predracun.racunotpremnicabroj + '.pdf');

/*
var strana = this.dataSource.paginator.pageIndex+1;
var poslednjastrana = this.dataSource.paginator.getNumberOfPages();
console.log(strana)
console.log(poslednjastrana);
html2canvas(document.getElementById("papir"),{
allowTaint:false,
useCORS:false,
scale:2,

}).then(function(canvas){
var doc = new jsPDF();
var img = canvas.toDataURL("papir/img");
doc.addImage(img,'PDF',0,0,210,297);
doc.save('Predracun.pdf');
}
)*/


}


}

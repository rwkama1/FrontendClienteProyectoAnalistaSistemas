import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { FormGroup, FormControl } from '@angular/forms';
import { CompraService } from '../../../../servicio/compra.service';
import { Compra } from '../../../../entidades/compra';
import { Http } from '@angular/http';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
//import html2pdf from 'html2pdf.js';


@Component({
    selector: 'vercompraa',
    templateUrl: './vercompraa.html'
    
})
export class VerCompraaComponent implements OnInit {
    vercompra
    //@ViewChild('areaImprimir') content: ElementRef;
    //get print() { return <HTMLInputElement>document.getElementById("print") };
    fc = JSON.parse(localStorage['Compra']) as Compra;
    data = (document.getElementById("areaImprimir"));
    constructor(public http: Http, private _router: Router, private _fact: CompraService) {
        
    }

    ngOnInit() {

        
        this.vercompra = new FormGroup
            (
            {
                ingid: new FormControl(),
                ingfecha: new FormControl(),
                ingmetodo: new FormControl(),
                ingcedula: new FormControl(),
                ingestado: new FormControl(),
                ingimp: new FormControl(),
                ingsubtotal: new FormControl(),
                ingtotal: new FormControl(),
            }
            );
        this.vercompra.patchValue
            (

            {
                ingid: this.fc.IdC,
                ingfecha: this.fc.FechaC,
                ingmetodo: this.fc.MetodoPagoC,
                ingcedula: this.fc.ClienteC,
                ingestado: this.fc.EstadoC,
                ingimp: '$'+this.fc.ImpuestosC,
                ingsubtotal: '$' +this.fc.SubtotalC,
                ingtotal: '$' + this.fc.TotalC,
              


            }
            )
    }
    printDiv() {
        //let element = this.content.nativeElement;
        //html2canvas(element).then(canvas => {
        //    // Few necessary setting options  
        //    let imgWidth = 208;
        //    let pageHeight = 295;
        //    let imgHeight = canvas.height * imgWidth / canvas.width;
        //    let heightLeft = imgHeight;

        //    const contentDataURL = canvas.toDataURL('image/png')
        //    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        //    let position = 0;
        //    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        //    pdf.save('MYPdf.pdf'); // Generated PDF   
        //});  
        //////let html2pdf = require('html2pdf.js');
        //const element = this.content.nativeElement;
        //let opt = {
        //    margin: 1,
        //    filename: 'myfile.pdf',
        //    image: { type: 'jpeg', quality: 0.98 },
        //    html2canvas: { scale: 2 },
        //    jsPDF: { unit: 'landscape', format: 'pt', orientation: 'A4' }
     
        //};
        //html2pdf().from(element)save();

        
    }
   
}
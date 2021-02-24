import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { FormGroup, FormControl } from '@angular/forms';
import { CompraService } from '../../../../servicio/compra.service';
import { Compra } from '../../../../entidades/compra';
import { Http } from '@angular/http';
import { Venta } from '../../../../entidades/venta';
//import html2pdf from 'html2pdf.js';


@Component({
    selector: 'vercliventa',
    templateUrl: './verventav.html'
    
})
export class VerVentaCliComponent implements OnInit {
    vercompra
    //@ViewChild('areaImprimir') content: ElementRef;
    //get print() { return <HTMLInputElement>document.getElementById("print") };
    fc = JSON.parse(localStorage['clienteVE']) as Venta;
    
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
                ingid: this.fc.IdV,
                    ingfecha: this.fc.FechaV,
                    ingmetodo: this.fc.MetodoPagoV,
                    ingcedula: this.fc.ClienteV,
                    ingestado: this.fc.EstadoV,
                    ingimp: '$' + this.fc.ImpuestosV,
                    ingsubtotal: '$' + this.fc.SubtotalV,
                    ingtotal: '$' + this.fc.TotalV,
              


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
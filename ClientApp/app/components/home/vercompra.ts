import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Compra } from '../../../../entidades/compra';
import { CompraService } from '../../../../servicio/compra.service';
import { Http } from '@angular/http';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 

@Component({
    selector: 'vercompra',
    templateUrl: './vercompra.html'
    
})
export class VerCompra implements OnInit {
    vercompra: FormGroup | undefined;
    @ViewChild('areaImprimir') content: ElementRef ;
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
        //var data = document.getElementById('contentToConvert');  //Id of the table
        //html2canvas(data).then(canvas => {
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
        //let html2pdf = require('html2pdf.js');
        //const element = this.content.nativeElement;
        //var element = document.getElementById('print');
        //var opt = {
        //    margin: 1,
        //    filename: 'myfile.pdf',
        //    image: { type: 'jpeg', quality: 0.98 },
        //    html2canvas: { scale: 2 },
        //    jsPDF: { unit: 'landscape', format: 'pt', orientation: 'A4' }
        //};
      
        //html2pdf().from(element).save();

        
    }
   
}
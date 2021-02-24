import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../../servicio/cliente.service';
import { CompraService } from '../../../../servicio/compra.service';
import { Http } from '@angular/http';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    constructor(public http: Http, private _router: Router, private _clientservice: ClienteService, private comservice: CompraService) {

    }
  
    iramodcli() {
       
        if (localStorage.getItem('cliente') == null) {
          
                this._router.navigate(['/logeo']);
           
        }
    }
    iniciarCompraa()
    {
       

        this.comservice.iniciarCompra().subscribe(data => {
                if (localStorage.getItem('cliente') == null) { this._router.navigate(['/logeo']); }
                else { this._router.navigate(['/listarproductos']); }

            });
       
    }
    listarordentaller()
    {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else
        {
            this._router.navigate(['/listarordenestaller']);
        }
   }
    logout() {
        this._clientservice.logout().subscribe(data => {
            localStorage.removeItem('cliente');
            this._router.navigate(['/home']);
        });
    }
    envmesj() {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else {
            this._router.navigate(['/envmsj']);
        }
    }
    chat() {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else {
            this._router.navigate(['/chat']);
        }
    }

    listarmsj() {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else {
            this._router.navigate(['/listmsj']);
        }
    }
    listarcompra() {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else {
            this._router.navigate(['/listcomprascli']);
        }
    }
    listarventa() {
        if (localStorage.getItem('cliente') == null) {
            this._router.navigate(['/logeo']);
        }
        else {
            this._router.navigate(['/listventasc']);
        }
    }
    
}

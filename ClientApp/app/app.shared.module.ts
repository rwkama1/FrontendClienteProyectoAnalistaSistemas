import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { LogeoComponent } from './components/logeo/logeo.component';
import { RegCliComponent } from './components/regmodcliente/regcli';
import { ModCliComponent } from './components/regmodcliente/modcli';
import { EnvMsjComponent } from './components/mensajes/envmsj';
import { ListmsjComponent } from './components/mensajes/listmsj.component';
import { ChatComponent } from './components/mensajes/chat';
import { VerPComponent } from './components/home/verp';
import { IngCantidadComponent } from './components/home/ingcantidad';
import { CerrarCompraComponent } from './components/home/cerrarcompra';
import { VerCompra } from './components/home/vercompra';
import { ListarProductosComponent } from './components/compra/listarproductos';
import { VerProductoComponent } from './components/compra/verproducto';
import { IngresarCantidadComponent } from './components/compra/ingcantidad';
import { CerrarCompraaComponent } from './components/compra/cerrarcompra';
import { VerCompraaComponent } from './components/compra/vercompra';
import { ListarOrdenTallerComponent } from './components/ordentaller/listarordenestaller';
import { VerOrdenTallerComponent } from './components/ordentaller/verordentaller';
import { ClienteService } from '../../servicio/cliente.service';
import { MensajeService } from '../../servicio/mensaje.service';
import { ProdService } from '../../servicio/prod.service';
import { SignalRService } from '../../servicio/chat';
import { CompraService } from '../../servicio/compra.service';
import { OrdenTallerService } from '../../servicio/ordetntallerservice';
import { Http, HttpModule } from '@angular/http';
import { ListComprasClient } from './components/compra/listcompras';
import { NavMenu2Component } from './components/navmenu/navmenu2';
import { ListarVentasCliComponent } from './components/compra/listarventas';
import { VerVentaCliComponent } from './components/compra/verventav';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        VerPComponent,
        CerrarCompraComponent,
        LogeoComponent,
        ListarOrdenTallerComponent,
        VerOrdenTallerComponent,
        VerCompra,
        IngresarCantidadComponent,
        VerVentaCliComponent,
        NavMenu2Component,
        ListarVentasCliComponent,
        ChatComponent,
        VerCompraaComponent,
        EnvMsjComponent,
        VerProductoComponent,
        ListComprasClient,
        ListarProductosComponent,
        CerrarCompraaComponent,
        RegCliComponent,
        IngCantidadComponent,
        ListmsjComponent,
        ModCliComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'listarproductos', component: ListarProductosComponent },
            { path: 'listventasc', component: ListarVentasCliComponent },
            { path: 'vercliventa', component: VerVentaCliComponent },
            { path: 'listcomprascli', component: ListComprasClient },
            { path: 'cerrarcompraa', component: CerrarCompraaComponent },
            { path: 'verordentaller', component: VerOrdenTallerComponent },
            { path: 'listarordenestaller', component: ListarOrdenTallerComponent },
            { path: 'vercompraa', component: VerCompraaComponent },
            { path: 'ingresarcantidad', component: IngresarCantidadComponent },
            { path: 'verproducto', component: VerProductoComponent },
            { path: 'vercompra', component: VerCompra },
            { path: 'ingcantidad', component: IngCantidadComponent },
            { path: 'cerrarcompra', component: CerrarCompraComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'verp', component: VerPComponent },
            { path: 'listmsj', component: ListmsjComponent },
            { path: 'envmsj', component: EnvMsjComponent },
            { path: 'logeo', component: LogeoComponent },
            { path: 'regcli', component: RegCliComponent },
            { path: 'modcli', component: ModCliComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ClienteService, MensajeService, ProdService, SignalRService, CompraService, OrdenTallerService]
})
export class AppModuleShared {
}

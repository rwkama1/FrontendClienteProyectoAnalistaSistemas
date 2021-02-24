import { LineaVenta } from "./lineaventa";



export class Venta
{
    IdV: number ;
    FechaV: Date  ;
    VencimientoV: Date ;
    MetodoPagoV: string ;
    FormaEntregaV: string ;
    ClienteV: number ;
    TarjetaV: number 
    ImpuestosV: number ;
    SubtotalV: number ;
    TotalV: number ;
    EstadoV: string;
    LineaVenta : LineaVenta[] ;
   public constructor()
    { }
}
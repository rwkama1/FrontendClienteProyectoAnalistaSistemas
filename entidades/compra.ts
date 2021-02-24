import { LineaCompra } from "./lineacompra";


export class Compra
{
    IdC: number ;
    FechaC: Date ;
    MetodoPagoC: string | undefined;
    ClienteC: number ;
    ImpuestosC: number ;
    SubtotalC: number ;
    TotalC: number ;
    EstadoC: string | undefined;
    LineaCompra: LineaCompra[] | undefined;
   public constructor()
    { }
}
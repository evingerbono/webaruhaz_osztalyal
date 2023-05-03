import mezek from "./adatok.js";
class Termek{
    constructor(adat,szuloElem){
       this.adat=adat;
       szuloElem.append("<div>"+"<p>"+this.adat.nev+"</p>"+"</div>");
       this.fajta=adat;
       szuloElem.append("<div>"+"<p>"+this.adat.fajta+"</p>"+"</div>");
       this.ar=adat;
       szuloElem.append("<div>"+"<p>"+this.adat.ar+"</p>"+"</div>");
    }

    setNev(){
        this.nev=mezek.nev;
    }
    setFajta(){
        this.fajta=mezek.fajta;
    }
    setAr(){
        this.ar=mezek.ar;
    }
}
export default Termek;
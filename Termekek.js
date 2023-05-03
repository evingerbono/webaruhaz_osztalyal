import Termek from "./Termek.js";
import mezek from "./adatok.js";
class Termekek{
    constructor (){
        const szuloElem = $("article");
       
        console.log(mezek);//lista
        for (let index = 0; index < mezek.length; index++) {
            new Termek(mezek[index],szuloElem);   
        }
    }
}
export default Termekek;
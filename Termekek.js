import Termek from "./Termek.js";
import mezek from "./adatok.js";
import Asszinkron from "./Asszinkron.js";
class Termekek {
    constructor() {
        const asszinkron = new Asszinkron();
        let vegpont = "http://localhost:3000/termekLista";
        asszinkron.adatBetolt(vegpont, this.megjelenit);

        const szuloElem = $("article");

        console.log(mezek);//lista
        for (let index = 0; index < mezek.length; index++) {
            new Termek(mezek[index], szuloElem);
        }
    }
}
export default Termekek;
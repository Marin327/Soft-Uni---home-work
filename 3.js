function solve(input) {
    let dniPrestoi = Number(input[0]);
    let tipPomeshtenie = input[1];
    let ocenka = input[2];

    krainaCena = 0;
   
    // po-malko ot 10 dni
    if (dniPrestoi < 10) {
        if (tipPomeshtenie == "room for one person") {
            krainaCena = ((dniPrestoi - 1) * 18);
        } else if (tipPomeshtenie == "apartment") {
            // sumata bez namalenie
            krainaCena = ((dniPrestoi - 1) * 25);
            // sumata s namalenie
            krainaCena = krainaCena - ((krainaCena * 30) / 100);
        } else if (tipPomeshtenie == "president apartment") {
            krainaCena = ((dniPrestoi - 1) * 35);
            krainaCena = krainaCena - ((krainaCena * 10) / 100);
        }
    }
    //mejdu 10 i 15 
    if (dniPrestoi >= 10 && dniPrestoi <= 15) {
        if (tipPomeshtenie == "room for one person") {
            krainaCena = ((dniPrestoi - 1) * 18);
        } else if (tipPomeshtenie == "apartment") {
            krainaCena = ((dniPrestoi - 1) * 25);
            krainaCena = krainaCena - ((krainaCena * 35) / 100);
        } else if (tipPomeshtenie == "president apartment") {
            krainaCena = ((dniPrestoi - 1) * 35);
            krainaCena = krainaCena - ((krainaCena * 15) / 100);
        }
    }
    //poveche ot 15
    if (dniPrestoi > 15) {
        if (tipPomeshtenie == "room for one person") {
            krainaCena = (dniPrestoi - 1) * 18;
        } else if (tipPomeshtenie == "apartment") {
            krainaCena = ((dniPrestoi - 1) * 25);
            krainaCena = krainaCena - ((krainaCena * 50) / 100);
        } else if (tipPomeshtenie == "president apartment") {
            krainaCena = ((dniPrestoi - 1) * 35);
            krainaCena = krainaCena - ((krainaCena * 20) / 100);
        }
    }
    //proverka na krainata ocenka i prekalkulaciq na krainaCena
    if (ocenka === "positive") {
        krainaCena = krainaCena * 1.25;
    } else if (ocenka == "negative") {
        krainaCena = krainaCena * 0.9;
    } else {
        console.lo("Nevalidna ocenka!");
    }
    //izvejdane na krainata suma
    console.log(`${krainaCena.toFixed(2)}`);
 }

solve(["14",
    "apartment",
    "positive"])
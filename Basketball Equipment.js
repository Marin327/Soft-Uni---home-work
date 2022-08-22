function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    let sneakers = yearTax - (yearTax * 0.40); // yearTax * 0.60;
    let teamClothes = sneakers - (sneakers * 0.20); // sneakers * 0.80;
    let ball = teamClothes / 4;
    let accessories = ball / 5;

    let total = yearTax + sneakers + teamClothes + ball + accessories;
    console.log(total);

}

basketballEquipment(["365"])
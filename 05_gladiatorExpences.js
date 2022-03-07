function gladiatorExpences(lostFights, helmet, sword, shield, armour) {

    let sum = 0;
    let shieldBrakes = 0;

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 == 0) {
            sum += helmet;
        }
        if (i % 3 == 0) {
            sum += sword;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            sum += shield;
            shieldBrakes++;

            if (shieldBrakes % 2 == 0) {
                sum += armour;
            }

        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpences(23,
    12.50,
    21.50,
    40,
    200
)    

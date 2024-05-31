const avionCalculs = require('../../avion/avionCalculs.js'); // require the file you want to test
const expect = require('chai').expect; // import other elements of Chai if needed, for example `assert`

describe('Calculs avion', function () {
        const empty = 183040;
        const maxWithoutFuel = 246070;
        const maxTakeoff = 396893;
        const maxLanding = 265350;
        const maxFuel = 173997;
        const maxTraveler = 400;
        const weightTraveler = 100;
        const consommation = 3.1;
        const kerosen = 0.81;
        const numberOfPassengers = 340;

        const fuelEquivalent = weightTraveler * numberOfPassengers * consommation * kerosen;
        const weightWithPassengers = empty + (weightTraveler * numberOfPassengers);
        const weightWithPassengersAndFuel = weightWithPassengers + fuelEquivalent;

        it('le poids à vide doit être inférieur à tous les autres poids', function() {
                expect(empty).to.be.below(maxWithoutFuel, 'Le poids à vide doit être inférieur au poids maximum sans carburant');
                expect(empty).to.be.below(maxTakeoff, 'Le poids à vide doit être inférieur au poids maximum de décollage');
                expect(empty).to.be.below(maxLanding, 'Le poids à vide doit être inférieur au poids maximum à l\'atterrissage');
        });
        
        it('le poids chargé doit toujours être supérieur au poids à vide', function() {
                expect(weightWithPassengers).to.be.above(empty, 'Le poids chargé doit être supérieur au poids à vide');
        });

        it('le poids chargé doit toujours être inférieur au poids max de décollage', function() {
                expect(weightWithPassengers).to.be.below(maxTakeoff, 'Le poids chargé doit être inférieur au poids maximum de décollage');
        });

        it('le poids avec les passagers doit être inférieur au poids max sans carburant et au poids max à l\'atterrissage', function() {        
                expect(weightWithPassengers).to.be.below(maxWithoutFuel, 'Le poids avec les passagers doit être inférieur au poids maximum sans carburant');
                expect(weightWithPassengers).to.be.below(maxLanding, 'Le poids avec les passagers doit être inférieur au poids maximum à l\'atterrissage');
        });

        it('le poids équivalent du carburant des passagers doit être inférieur à la capacité de carburant maximale', function() {
                expect(fuelEquivalent).to.be.below(maxFuel, 'Le poids équivalent du carburant des passagers doit être inférieur à la capacité de carburant maximale');
        });

        it('le poids avec les passagers et leur carburant doit être inférieur au poids max de décollage', function() {    
                expect(weightWithPassengersAndFuel).to.be.below(maxTakeoff, 'Le poids avec les passagers et leur carburant doit être inférieur au poids maximum de décollage');
        });

        it('le nombre maximum de passagers doit être respecté', function() {
                expect(numberOfPassengers).to.be.at.most(maxTraveler, 'Le nombre maximum de passagers doit être respecté');
        });
        it('si la function "flying" est correcte', function() {
                let response = avionCalculs.flyable(empty, maxWithoutFuel, maxTakeoff, maxLanding, maxFuel, maxTraveler, weightTraveler, consommation, kerosen, numberOfPassengers);
                expect(response).to.equal(true, 'L\'avion doit être capable de voler avec les conditions fournies');
        });

});

/* 
poids à vide : 183040 kg
poids max sans carburant : 246070 kg
poids max au décollage : 396893 kg
poids max à l'atterrissage : 265350 kg
capacité de carburant maximale : 173997 kg

Nombre de passagers max : 400 environ.
On compte environ 100kg par passager
Il consomme en moyenne environ 3,1L/100km/passager.
Attention, la densité du kérosène est de 810Kg/m3 au lieu de 1000 pour l'eau (donc 1L de kérosène ne pèse pas 1kg, mais bien 0,81 kg ;) ) !

Un avion à vide a un poids minimum, donc il faut un minimum de carburant pour le faire voler
En fonction du nombre de passagers, il faut ajouter du carburant pour les transporter, ainsi que leurs bagages.
Attention, un avion chargé a un poids maximum, carburant compris, à ne pas dépasser.
 */
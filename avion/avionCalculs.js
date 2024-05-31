function flyable(empty, maxWithoutFuel, maxTakeoff, maxLanding, maxFuel, maxTraveler, weightTraveler, consommation, kerosen, numberOfPassengers) {

     const loaded = empty + (weightTraveler * numberOfPassengers);
     const fuelEquivalent = weightTraveler * numberOfPassengers * consommation * kerosen;
     const weightWithPassengersAndFuel = loaded + fuelEquivalent;
 
     if (
          empty < maxWithoutFuel &&
         empty < maxTakeoff &&
         empty < maxLanding &&
         loaded > empty &&
         loaded < maxTakeoff &&
         loaded < maxWithoutFuel &&
         loaded < maxLanding &&
         weightTraveler * numberOfPassengers < maxWithoutFuel &&
         weightTraveler * numberOfPassengers < maxLanding &&
         fuelEquivalent < maxFuel &&
         weightWithPassengersAndFuel < maxTakeoff &&
         numberOfPassengers <= maxTraveler
     ) {
          return (true)
     }
 }
 
 module.exports = { flyable };
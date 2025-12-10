//CameraA
class CameraA {
constructor(location) {
    this.location = location;
} // location = nom de la pièce
detect() {
    return `Alerte caméra détectée dans la pièce: ${this.location}`;
} // Déclenche un message d’alerte (string)
}

// TemperatureSensorA
 class TemperatureSensorA {
constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
} // location = nom de la pièce, threshold = température de déclenchement
 detect() {
    return `Alerte température élevée dans la pièce: ${this.location}, seuil: ${this.threshold}°C`;
 } // Déclenche un message d’alerte (string)
 }

// MotionSensorA
class MotionSensorA {
 constructor(location) {
    this.location = location;
 }
 detect() {
    return `Alerte mouvement détecté dans la pièce: ${this.location}`;
 } // Déclenche un message d’alerte (string)
 }


 //ThermalSensorB
class ThermalSensorB {
constructor(position) {
    this.position = position;
} // position {
scanHeatSignature() {
    return {
        "sensor": this.position,
        "detection": "thermal",
        "date": new Date().toISOString()
    };
} // Déclenche une donnée complexe json, voir ci dessous
}
  
console.log(new ThermalSensorB("Hall d'entrée").scanHeatSignature());
console.log(new ThermalSensorB("BatimentC").scanHeatSignature());






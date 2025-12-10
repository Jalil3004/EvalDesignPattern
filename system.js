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

class Notification {
constructor(type, destination) {
    this.type = type;
    this.destination = destination;
}

notif(message) {
    switch (this.type) {
        case 'Email':
            console.log(`Envoi d'un email à ${this.destination} : ${message}`);
            break;
        case 'Log':
            console.log(`Enregistrement dans le fichier de log : ${message}`);
            break;
        case 'Discord':
            console.log(`Envoi d'un message Discord à ${this.destination} : ${message}`);
            break;
        default:
            console.log('Type de notification inconnu');
    }
}
}


const camera = new CameraA("Salon");
const tempSensor = new TemperatureSensorA("Cuisine", 30);
const motionSensor = new MotionSensorA("Garage");

const emailNotification = new Notification('Email', 'jalil@gmail.com');
const logNotification = new Notification('Log', null);
const discordNotification = new Notification('Discord', 'https://discord.com');

emailNotification.notif(camera.detect());
logNotification.notif(tempSensor.detect());
discordNotification.notif(motionSensor.detect());





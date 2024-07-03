export default class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;    
        this.edad = edad;    
    }
    MostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
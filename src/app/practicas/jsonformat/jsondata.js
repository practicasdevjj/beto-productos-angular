const employee = {
    "nombre":"pancho",
    "apellidos":"lopez",
    "edad": 23,
    "fechadeNacimiento": {
        "day": 12,
        "month": 12,
        "year": 2000
    },
    "esto tambien es un indice": "valor desconocido"
}

employee.nombre; // esto es igual a pancho
employee.fechadenacimient.day; // est es igual a 12 

employee.valorDesconocido = 'nosedad';
const jsonstr = "{\"nombre\":\"pancho\",\"apellidos\":\"lopez\",\"edad\": 23,\"fechadenacimient\": {\"day\": 12,\"month\": 12,\"year\": 2000}}";

const employee2 = JSON.parse(jsonstr);

employee2.apellidos; // esto es igul a lopez
employee2["esto tambien es un indice"]; // esto es igual a valor desconocido


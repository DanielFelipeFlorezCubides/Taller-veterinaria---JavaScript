const mascotas = [];

function crearMascota(nombre, especie, edad, peso, estadoSalud) {
    return {
        nombre,
        especie,
        edad,
        peso,
        estadoSalud
    };
}

function registrarMascota(callback){
    let nombre = prompt('Ingrese el nombre de la mascota');
    let especie = prompt('Ingrese la especie de la mascota');
    let edad = prompt("Ingrese la edad de la mascota");
    let peso = prompt("Ingrese el peso de la mascota (kg)");
    let estadoSalud = prompt("Ingrese el estado de salud de la mascota");

    setTimeout(() => {
        mascotas.push(crearMascota(nombre, especie, edad, peso, estadoSalud));
        alert("Mascota registrada con éxito!");
        callback();
    }, 1000);
}

function listarMascotas(callback){
    if(mascotas.length === 0){
        alert("No hay mascotas registradas");
        return;
    }
    let lista = "Lista de mascotas: \n";
    mascotas.forEach((mascota, index) => {
        lista += `Posicion en la lista: ${index + 1},\n Nombre: ${mascota.nombre},\n Raza: ${mascota.especie},\n Edad: ${mascota.edad},\n Peso: ${mascota.peso},\n Estado de salud: ${mascota.estadoSalud} \n`;
    });
    alert(lista);

    setTimeout(() => {
        alert("Regresando al menu principal");
        callback();
    }, 1000);
}

function buscarMascota(callback) {
    let nombre = prompt("Ingrese el nombre de la mascota a buscar:");
    setTimeout(() => {
        let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
        if (mascota) {
            alert(`Mascota encontrada:\nNombre: ${mascota.nombre}, Especie: ${mascota.especie}, Salud: ${mascota.estadoSalud}`);
        } else {
            alert("Mascota no encontrada.");
        }
        callback();
    }, 1000);
}

function mostrarMenu(){
    let opcion;
    do {
        opcion = prompt("1. Registrar mascota \n 2. Listar mascotas \n 3. Buscar mascota \n 4. Actualizar mascota \n 5. Eliminar mascota \n 6. Salir");
        switch (opcion){
            case "1":
                registrarMascota(mostrarMenu);
                return;
            case "2":
                listarMascotas(mostrarMenu);
                return;
            case "3":
                buscarMascota(mostrarMenu);
                return;
        }
    } while (opcion !== "6");
}

mostrarMenu();
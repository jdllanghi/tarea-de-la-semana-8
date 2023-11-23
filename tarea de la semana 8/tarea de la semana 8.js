function validarTaxi(taxi) {
    // Verificar si el año de fabricación es un número de cuatro dígitos
    if (!taxi.añoFabricacion || typeof taxi.añoFabricacion !== 'number' || taxi.añoFabricacion.toString().length !== 4) {
      return "Error: El año de fabricación del taxi no es válido.";
    }
  
    // Obtener el año actual
    const añoActual = new Date().getFullYear();
  
    // Calcular la vida útil del taxi restando el año de fabricación al año actual
    const vidaUtil = añoActual - taxi.añoFabricacion;
  
    // Verificar si la vida útil es menor a 10 años y devolver el mensaje correspondiente
    if (vidaUtil < 10) {
      return "El taxi es válido.";
    } else {
      return "El taxi no es válido, ha superado los 10 años de vida útil.";
    }
  }
  
  // Ejemplo de uso:
  const taxi1 = {
    modelo: "Toyota ",
    añoFabricacion: 2015,
    // Otros atributos del taxi...
  };
  
  const resultadoValidacion = validarTaxi(taxi1);
  alert(resultadoValidacion); // Imprimirá un mensaje indicando si el taxi es válido o no
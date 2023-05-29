let persona = {
    nombre: "Maria",
    edad: 22,
    profesion: "profesor",
  }
  
  function preasentarPersona(persona){
   let presentacion = "Hola muchos gusto me llamo " + persona.nombre + " tengo "  + persona.edad + " años de edad, mi profesion es " +     
   persona.profesion;
    return presentacion;
  }
  let presentacion = preasentarPersona(persona);
  console.log(presentacion);
  
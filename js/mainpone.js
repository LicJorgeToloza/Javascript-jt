// Registro de Cliente

function registroCliente() {
    //se piden datos: noombre y apellido
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    //Se muestran datos ingresados
    let cliente = nombre + " " + apellido;
    alert("Bienvenido" + " " + nombre + " " + apellido);
    //Se pregunta si se quiere registrar como cliente
    let regcl = confirm("se registra como cliente?");
  
    if (regcl) {
      //Si confirma que se registra, pide email
      let email = prompt("ingrese un email");
      //se muestra mensaje en consola
      console.log("se envió mail de registracion a: " + email);
      //mensaje al usuario
      alert(cliente + ", registracion exitosa!");
    } else {
      alert(nombre + ", Ud entra como cliente anonimo");
    }
  
    return nombre + " " + apellido;
    //   alert(cliente + ", usted es el cliente Nro:" + registroCl);
  }
  
  function mostrarServicios() {
    let codServicio = prompt(
      "Seleccione el servicio a adquirir:\n\t1- Diseño de marca -> Costo: $3000\n\t2- Marketing digital -> Costo: $4000\n\t3- Diseño web -> Costo: $5000"
    );
    return codServicio;
  }
  
  function principal() {
    let cliente = registroCliente();
  
    let costoServicios = 0;
  
    alert("Seleccione el servicio que va a adquirir");
  
    let respuesta;
    do {
      let selServicio = parseInt(mostrarServicios());
      console.log(selServicio);
  
      let serviciosEleg;
  
      switch (selServicio) {
        case 1:
          console.log("servicio 1 elegido");
          costoServicios = costoServicios + 3000;
          break;
        case 2:
          console.log("servicio 2 elegido");
          costoServicios = costoServicios + 4000;
          break;
        case 3:
          console.log("servicio 3 elegido");
          costoServicios = costoServicios + 5000;
          break;
        default:
          break;
      }
  
      respuesta = prompt("Va a adquirir otro servicio?");
    } while (respuesta == "SI");
  
    console.log(costoServicios);
    alert("Costo total de servicios: " + costoServicios + " pesos");
  }
  principal();
  
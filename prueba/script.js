function selectImage(imageSrc) {
  document.getElementById('selectedImage').src = imageSrc;
}






function myFunctionVeiculo() {
  var veiculo = document.getElementById("veiculo").value;
  document.getElementById("colTEX").innerText = veiculo;
}

function myFunctionN() {
  var plan = document.getElementById("nombreP").value;
  document.getElementById("pex").innerText = plan;
}

function myFunctionMonto() {
  var costoPlan = document.getElementById("nombreP1").value;
  document.getElementById("pex2").innerText = costoPlan;
}

function myFunctionFinanciamos() {
  var financiamiento = document.getElementById("nombreP2").value;
  document.getElementById("pex3").innerText = financiamiento;
}

function myFunctionCuotas() {
  var cuotas = document.getElementById("nombreP3").value;
  document.getElementById("pex4").innerText = cuotas;
}

function myFunctionPrimeraCuota() {
  var cuotasFijas = document.getElementById("nombreP4").value;
  document.getElementById("pex5").innerText = cuotasFijas;
  var letras;
  letras = cuotasFijas;
   const res = document.getElementById("pex5");
   res.innerHTML = letras;
   res.style.color = "black";
   res.style.fontWeight = "bold";
   res.style.fontFamily = "Arial, sans-serif"; // Agregado


}

function myFunctionApartirDeLaCuota() {
  var cuotaActualiza = document.getElementById("nombreP5").value;
  document.getElementById("pex6").innerText = cuotaActualiza;


}

function myFunctionIntegrar() {
  var porcentajeIntegrar = document.getElementById("nombreP6").value;
  document.getElementById("pex7").innerText = porcentajeIntegrar;
}

function myFunctionCostoALaFecha() {
  var costoIntegrar = document.getElementById("nombreP7").value;
  document.getElementById("pex8").innerText = costoIntegrar;
}


//...............................


function myFunctionDescriptionGeneral() {
  var costoIntegrar = document.getElementById("nombreP80").value;
  document.getElementById("pe").innerText = costoIntegrar;
}

//------------

function myFunctionDescriptionBonificaciones() {
  var costoIntegrar = document.getElementById("nombreP90").value;
  document.getElementById("peya").innerText = costoIntegrar;
  var letras;
  letras = costoIntegrar;
   const res = document.getElementById("peya");
   res.innerHTML = letras;
   res.style.color = "black";
   res.style.fontWeight = "bold";
   res.style.fontFamily = "Arial, sans-serif"; // Agregado
}

// //----------------------------------------------------------------------------
// //veiculo
// function myFunctionVeiculo() {
//   var palabra = document.getElementById("veiculo").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("colTEX");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   // res.style.marginTop = "20px";
//   // res.style.textAlign = "center";
//   // res.style.fontWeight = "600";
//   // res.style.height = "1.4em";
// }
// //...........................................
// //plan
// function myFunctionN() {
//   var palabra = document.getElementById("nombreP").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //monto--------------------------------------------------------
// function myFunctionMonto() {
//   var palabra = document.getElementById("nombreP1").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex1");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //financiamos--------------------------------------------------
// function myFunctionFinanciamos() {
//   var palabra = document.getElementById("nombreP2").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex2");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //cuotas---------------------------------------------------------------
// function myFunctionCuotas() {
//   var palabra = document.getElementById("nombreP3").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex3");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //primeras-----------------------------------------------------------
// function myFunctionPrimeraCuota() {
//   var palabra = document.getElementById("nombreP4").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex4");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //a partir de la cuota--------------------------------------------------
// function myFunctionApartirDeLaCuota() {
//   var palabra = document.getElementById("nombreP5").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex5");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
/*       res.style.fontWeight = "bold"; */
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }

// //integrar-------------------------------------------------------------
// function myFunctionIntegrar() {
//   var palabra = document.getElementById("nombreP6").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex6");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }
// //a la fecha tiene un costo--------------------------------------------------------
// function myFunctionCostoALaFecha() {
//   var palabra = document.getElementById("nombre7P").value;
//   console.log(palabra);
//   var letras;
//   letras = palabra;

//   const res = document.getElementById("pex7");
//   res.innerHTML = letras;
//   // res.style.color = "#fff";
//   // res.style.fontSize = "1.5rem";
//   res.style.marginTop = "20px";
//   res.style.textAlign = "center";
//   res.style.fontWeight = "600";
//   res.style.height = "1.4em";
// }
// //----------------------------------------------------------------------------








































































//imagen
/* function myFunctionImag() {
  var palabra = document.getElementById("imagen").value;
  console.log(palabra);
  var letras;
  letras = palabra;

  const res = document.getElementById("im");
  res.src = letras;
} */

function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    };
  }
}
// .....................................
function mostrar2() {
  var archivo = document.getElementById("file2").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img2").src = reader.result;
    };
  }
}
// .........................................
function mostrar3() {
  var archivo = document.getElementById("file3").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img3").src = reader.result;
    };
  }
}
// ...................................
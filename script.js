const table = document.getElementById("services");
const addRowButton = document.getElementById("addRow");
let rowCount = 1;
// espacio pruebas 

function calcularSub (cantidad, preciou,itemNumber) {
  calculoSubtotal = parseInt (cantidad) * parseInt (preciou) 
  console.log (calculoSubtotal);

  let table = document.getElementById("services");
  itemNumber = itemNumber.match(/\d+/)[0];
  console.log (itemNumber)
  if (rowCount < 20) {
    let selectorr = `subTotal${itemNumber}`;
/*     document.querySelector(selectorr).value = calculoSubtotal;*/    
    var elemento = document.getElementById(selectorr);
    elemento.value = calculoSubtotal;
  }
   
  console.log (itemNumber)
  if (rowCount < 20) {
    let selectorr = `subTotal${itemNumber}`;
/*     document.querySelector(selectorr).value = calculoSubtotal;*/    
    var elemento = document.getElementById(selectorr);
    elemento.value = calculoSubtotal;
  }
   
  
}

//--------------------

addRowButton.addEventListener("click", function() {
  if (rowCount < 20) {
    const newRow = table.insertRow(-1);
    const conceptoCell = newRow.insertCell(0);
    const cantidadCell = newRow.insertCell(1);
    const precioCell = newRow.insertCell(2);
    const subtotalCell = newRow.insertCell(3);
    conceptoCell.innerHTML = `<input type="text" name="concepto${rowCount + 1}">`;
    cantidadCell.innerHTML = `<input type="number" name="cantidad${rowCount + 1}" id="cantidad${rowCount + 1}" onchange="calcularSub(this.value, document.getElementById('preciou${rowCount + 1}').value, this.name)">`;
    precioCell.innerHTML = `<input type="number" name="precio${rowCount + 1}" id="preciou${rowCount + 1}" onchange="calcularSub(document.getElementById('cantidad${rowCount + 1}').value, this.value, this.name)">`;
    subtotalCell.innerHTML = `<input type="number" name="precio${rowCount + 1}" value="0" id="subTotal${rowCount + 1}" readonly>`;
    rowCount++;

  }
});

// guardar datos del formulario
const form = document.getElementById("form");
const fechaCoti = document.getElementById("fecha");
const validoHasta = document.getElementById("validohasta");
const numCotizacion = document.getElementById("numero-cotizacion");
// datos de la empresa
const nombreEmpresa = document.getElementById("nombreEmpresa");
const direccionEmpresa = document.getElementById("direccion-empresa");
const celularEmpresa = document.getElementById("celular-empresa");
const correoEmpresa = document.getElementById("correo-empresa");
const numIdentificacionEmpresa = document.getElementById("numid-empresa");
const tipoidEmpresa = document.getElementById("tipoid-empresa");
// datos del cliente
const nombreCliente = document.getElementById("nombreCliente");
const direccionCliente = document.getElementById("direccion-cliente");
const celularCliente = document.getElementById("celular-cliente");
const correoCliente = document.getElementById("correo-cliente");

const tiempoProyecto = document.getElementById("tiempoProyecto");
const valorIva = document.getElementById("valorIva");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const fechaCotiValue = fechaCoti.value;
  const validoHastaValue = validoHasta.value;
  const numCotiValue = numCotizacion.value;
  const nombreEmpresaValue = nombreEmpresa.value;
  const direccionEmpresaValue = direccionEmpresa.value;
  const celularEmpresaValue = celularEmpresa.value;
  const correoEmpresaValue = correoEmpresa.value;

  const nombreClienteValue = nombreCliente.value;
  const direccionClienteValue = direccionCliente.value;
  const celularClienteValue = celularCliente.value;
  const correoClienteValue = correoCliente.value;

  const tiempoProyectoValue = tiempoProyecto.value;
  const valorIvaValue = valorIva.value;

  const table = document.getElementById("services");
  const rows = table.rows;
  const services = [];
  const precios = [];
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;
    const concepto = cells[0].children[0].value;
    const cantidad = cells[1].children[0].value;
    const precio = cells[2].children[0].value;
    const subtotal = cells[3].children[0].value;
    services.push({concepto, cantidad, precio, subtotal});
    precios.push(subtotal);
  }

  // LLAMAR A LAS VARIABLES

//   console.log("Nombre de la empresa:", nombreEmpresaValue);
//   console.log("Nombre del cliente:", nombreClienteValue);
//   console.log("Tiempo del proyecto:", tiempoProyectoValue);
//   console.log("Services:", services);
//   console.log("Precios:", precios);


  
 // sumar los precios

 const sumaPrecios = precios.reduce((a, b) => parseInt(a) + parseInt(b), 0);
 const vTotal = parseInt(sumaPrecios) + parseInt(valorIvaValue);
//  console.log("Suma de precios:", sumaPrecios);
 
let interpolarMes = "mes"
if (tiempoProyectoValue <= 1) {
  interpolarMes = "mes"
}else { interpolarMes = "meses"}
 //

//   mostrar los resultados 

  const result = `
  <img src="logo.png" alt="" width="100px" height="100px">
  <h3>Fecha: ${fechaCotiValue}</h3>
  <h3>Valido hasta: ${validoHastaValue}</h3>
  <h3>Número de cotización: ${numCotiValue}</h3>

  <h1>Información de la empresa:</h1>
  <h2>Nombre: ${nombreEmpresaValue}</h2>
  <h2>Direccion: ${direccionEmpresaValue}</h2>
  <h2>Celular: ${celularEmpresaValue}</h2>
  <h2>Correo: ${correoEmpresaValue}</h2>
  
  <h1>Información del Cliente:</h1>
  <h2>Nombre: ${nombreClienteValue}</h2>
  <h2>Direccion: ${direccionClienteValue}</h2>
  <h2>Celular: ${celularClienteValue}</h2>
  <h2>Correo: ${correoClienteValue}</h2>
  <h2>Tiempo del proyecto: ${tiempoProyectoValue} ${interpolarMes}</h2>
  <h2>Servicios:</h2>
  <table>
    <tr>
      <th>Concepto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Subtotal</th>
    </tr>
    ${services.map(service => `
      <tr>
        <td>${service.concepto}</td>
        <td>${service.cantidad}</td>
        <td>${service.precio}</td>
        <td>${service.subtotal}</td>
      </tr>
    `).join('')}
    <tr>
      <th> </th>
      <th> </th>
      <th> </th>
      <th>Subtotal: ${sumaPrecios}</th>
    </tr>

    <tr>
      <th></th>
      <th> </th>
      <th> </th>
      <th> Iva: ${valorIvaValue} </th>
    </tr>
    <tr>
      <th></th>
      <th> </th>
      <th> </th>
      <th> Total: ${vTotal} </th>
    </tr>
  </table>
`;

const save = {
  fecha: fechaCotiValue,
  validoHasta: validoHastaValue,
  numeroCotizacion: numCotiValue,
  empresa: nombreEmpresaValue,
  direccionEmpresa: direccionEmpresaValue,
  celularEmpresa: celularEmpresaValue,
  correoEmpresa: correoEmpresaValue,
  nombreCliente: nombreClienteValue,
  direccionCliente: direccionClienteValue,
  celularCliente: celularClienteValue,
  correoCliente: correoClienteValue,
  tiempoProyecto: tiempoProyectoValue,
  valorIva: valorIvaValue,
  services: services,
  sumaPrecios: sumaPrecios,
}

localStorage.setItem("cotizador", JSON.stringify(save));

//document.getElementById("result").innerHTML = result;

});





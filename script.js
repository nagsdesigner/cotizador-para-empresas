const table = document.getElementById("services");
const addRowButton = document.getElementById("addRow");
let rowCount = 1;

addRowButton.addEventListener("click", function() {
  if (rowCount < 20) {
    const newRow = table.insertRow(-1);
    const conceptoCell = newRow.insertCell(0);
    const cantidadCell = newRow.insertCell(1);
    const precioCell = newRow.insertCell(2);
    conceptoCell.innerHTML = `<input type="text" name="concepto${rowCount + 1}">`;
    cantidadCell.innerHTML = `<input type="number" name="cantidad${rowCount + 1}">`;
    precioCell.innerHTML = `<input type="number" name="precio${rowCount + 1}">`;
    rowCount++;
  }
});

// guardar datos del formulario
const form = document.getElementById("form");
const nombreEmpresa = document.getElementById("nombreEmpresa");
const nombreCliente = document.getElementById("nombreCliente");
const tiempoProyecto = document.getElementById("tiempoProyecto");
const services = [];
const precios = [];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nombreEmpresaValue = nombreEmpresa.value;
  const nombreClienteValue = nombreCliente.value;
  const tiempoProyectoValue = tiempoProyecto.value;

  const table = document.getElementById("services");
  const rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;
    const concepto = cells[0].children[0].value;
    const cantidad = cells[1].children[0].value;
    const precio = cells[2].children[0].value;
    services.push({concepto, cantidad, precio});
    precios.push(precio);
  }

  // LLAMAR A LAS VARIABLES

//   console.log("Nombre de la empresa:", nombreEmpresaValue);
//   console.log("Nombre del cliente:", nombreClienteValue);
//   console.log("Tiempo del proyecto:", tiempoProyectoValue);
//   console.log("Services:", services);
//   console.log("Precios:", precios);


  
 // sumar los precios

 const sumaPrecios = precios.reduce((a, b) => parseInt(a) + parseInt(b), 0);
//  console.log("Suma de precios:", sumaPrecios);
 

 //

//   mostrar los resultados 

  const result = `
  <img src="logo.png" alt="" width="100px" height="100px">
  <h2>Nombre de la empresa: ${nombreEmpresaValue}</h2>
  <h2>Nombre del cliente: ${nombreClienteValue}</h2>
  <h2>Tiempo del proyecto: ${tiempoProyectoValue}</h2>
  <h2>Servicios:</h2>
  <table>
    <tr>
      <th>Concepto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
    ${services.map(service => `
      <tr>
        <td>${service.concepto}</td>
        <td>${service.cantidad}</td>
        <td>${service.precio}</td>
      </tr>
    `).join('')}
    <tr>
    <th> </th>
    <th> </th>
      <th>Total ${sumaPrecios}</th>
    </tr>
  </table>
`;

document.getElementById("result").innerHTML = result;

});





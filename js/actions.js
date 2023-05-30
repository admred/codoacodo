
const cantidad=document.querySelector('#cantidad');
const descuento=document.querySelector('#descuento');
const resultado=document.querySelector('#resultado');


function calcular() {
    const precioUnidad=200.0;
    const precio=precioUnidad*parseInt(cantidad.value);
    const conDescuento=precio-precio*parseFloat(descuento.value);

    resultado.value=`Total a Pagar: $ ${conDescuento}`;
}

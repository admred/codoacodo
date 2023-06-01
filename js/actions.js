const cantidad=document.getElementById('cantidad');
const descuento=document.getElementById('descuento');
const resultado=document.getElementById('resultado');
const submit=document.getElementById('submit');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const email=document.getElementById('email');

function calcular(){
    const precioUnidad=200.0;
    const precio=precioUnidad*parseInt(cantidad.value);
    const conDescuento=precio-precio*parseFloat(descuento.value);

    resultado.value=`Total a Pagar: $ ${conDescuento}`;
}

document.addEventListener('submit',(event)=>{
    event.preventDefault();
    event.stopPropagation();

    calcular();
});

combustivel = () => {

    const dist = parseFloat(document.getElementById('i1').value)
    const rend = parseFloat(document.getElementById('i2').value)
    const price = parseFloat(document.getElementById('i3').value)
    
    document.getElementById("answer").value = 'R$' + ((dist/rend)*price*1.10).toFixed(2);
}

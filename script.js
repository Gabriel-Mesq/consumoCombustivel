combustivel = () => {

    const dist = parseFloat(document.getElementById('i1').value)
    const rend = parseFloat(document.getElementById('i2').value)
    const price = parseFloat(document.getElementById('i3').value)

    const aux = (dist/rend)*price*1.10
    
    if (aux) {
        document.getElementById("answer").value = 'R$' + (aux).toFixed(2);
    }
}

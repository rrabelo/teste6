function contar() {
    var ini = document.getElementById('txti')     //captar a várivael inicio     
    var fim = document.getElementById('txtf')     // captar a váriavel fim 
    var passo = document.getElementById('txtp')   // cap tar a váriavel passo 
    var res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p<=0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1            
        }

        if (i < f) {
            // contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // contagem regressiva 
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }   
        res.innerHTML += `\u{1F3c1}`
    }

}


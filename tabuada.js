function gerar(){
    let num = document.getElementById('n');
    let tab = document.getElementById('seltab');
    
    if (num.value.length == 0) {
        window.alert('Por favor insira um número.');
    }else {
        let n = Number(num.value);
        tab.innerHTML = '';
    }

    for(c = 1; c <= 10; c++){
        let item = document.createElement('option');
        item.text = `${n.value} x ${c} = ${n.value*c}`;
        item.value = `tab${c}`
        tab.appendChild(item);

    }
}
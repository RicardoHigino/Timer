function relogio(){
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    } 
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio()
            relogio.style.color = '#000'
        }

        if(el.classList.contains('pausar')) {
            relogio.style.color = '#DC143C'
            clearInterval(timer);
        }
        
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.style.color = '#000'
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}
relogio()
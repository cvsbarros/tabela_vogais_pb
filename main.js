function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log ('Elemento não encontrado.');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    document.addEventListener('keydown', function(evento) {
        if (evento.key === 'i'){
            tocaSom('#som_tecla_i');
        }
        else if (evento.key === 'u'){
            tocaSom('#som_tecla_u');
        }
        else if (evento.key === 'e'){
            tocaSom('#som_tecla_e1');
        }
        else if (evento.key === 'r'){
            tocaSom('#som_tecla_e2');
        }
        else if(evento.key === 'o'){
            tocaSom('#som_tecla_o1');
        }
        else if(evento.key === 'p'){
            tocaSom('#som_tecla_o2');
        }
        else if(evento.key === 'a'){
            tocaSom('#som_tecla_a');
        }
        else{
            console.log('Não há som associada a esta tecla.');
        }
    });

    document.addEventListener('keydown', (event) => {console.log('Tecla pressionada:', event.key);});

}
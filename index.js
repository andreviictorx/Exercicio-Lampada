const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')


//nesse caso, é crucial chamar a função no if pra fazer a verificação
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1 //aqui ele verifica se no ato há  o src de quebrada
}

function lampOn(){
    if(!isLampBroken()){ //qui ele so vai ativar a lampada se ela não estiver quebrada
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
   if(!isLampBroken()){
    lamp.src='./img/desligada.jpg';
   } 
}


function lampBroken(){
    lamp.src ='./img/quebrada.jpg';
}

turnOff.addEventListener('click', lampOff)
turnOn.addEventListener('click', lampOn)


lamp.addEventListener('mousemove', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
//testando a diferença dos commit
// testando alteração no git

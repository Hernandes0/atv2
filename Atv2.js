var data_evento = Date('12/03/2021 12:30');
var data_check =  new Date(); 

if(data_evento<=data_check){
    console.log ('Evento não pode ocorrer devido a data');
}
else{
    console.log ('Data do evento disponivel');
}

var idade_participante = 23;
var idade_check = 18;

if(idade_participante<=idade_check){
    console.log ('Participante não pode entrar no envento');
}
else{
    console.log ('Participante pode entrar no envento');
}

var qtd_participante = 50;
var qtd_check = 100;

if(qtd_participante<=qtd_check){
    console.log ('Evento pode ocorrer');
}
else{
    console.log ('Evento não pode ocorrer devido a quantidade de participantes');
}

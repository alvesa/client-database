function validarNome() {
    var nome = ""
    if (nome === "" ) {
        return console.log("O nome não foi preenchido")
    }
}

function validarSobrenome() {
    var sobrenome = ""
    if (sobrenome ==="" ) {
        return console.log("O sobrenome não foi preenchido")
    }
}

function validarEmail(){
    var email = ""
    if(email = ('[a-z0-9]+@[A-Z]+.')){
        return true
    }else {
        return console.log("email invalido")
    }
}

function validarCep(){
    var cep = ""
    if(cep > 9){
        return console.log("o cep deve conter apenas 9 digitos")
    }
}

const Estados = [Rondônia - RD, Acre - AC, Amazonas - AM, Roraima - RR, Pará - PA, Amapá - AP, Tocantins - TO, Maranhão - MA, Piauí - PI, Ceará - CE, RioGrandeDoNorte - RN, Paraíba - PB, Pernambuco - PE, Alagoas - AL, Sergipe - SE, Bahia - BA, MinasGerais - MG, EspíritoSanto - ES, RioDeJaneiro - RJ, SãoPaulo - SP, Paraná - PR, SantaCatarina - SC, RioGrandeDoSul - RS, MatoGrossoDoSul - MS, MatoGrosso - MT, Goiás - GO, DistritoFederal - DF]
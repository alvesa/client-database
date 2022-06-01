function validarNome(nome) {
    if (nome === "" ) {
        return "O nome não foi preenchido"
    }
    if(nome.length < 3) {
        return "O nome deve conter 3 caracteres ou mais"
    }
} 

function validarSobrenome(sobrenome) {
    if (sobrenome === "" ) {
        return "O sobrenome não foi preenchido"
    }
}

function validarCep(cep) {
    if (cep === "" ) {
        return "O cep não foi preenchido"
    }
    if(cep.length >= 9) {
        return "O cep deve conter apenas 8 caracteres"
    }
} 

function validarEmail(email){
    let arroba = email.indexOf("@")
    let ponto = email.indexOf(".")
    if(arroba == -1){
        return "o email nao contem o caracter @"
    }
    if(ponto == -1){
        return "o email nao contem o caracter ."
    }
}

function listarEstados(){
    var estados = ["Rondônia - RD", "Acre - AC", "Amazonas - AM", "Roraima - RR", "Pará - PA", "Amapá - AP", "Tocantins - TO", "Maranhão - MA", "Piauí - PI", "Ceará - CE", "Rio Grande Do Norte - RN", "Paraíba - PB", "Pernambuco - PE", "Alagoas - AL", "Sergipe - SE", "Bahia - BA", "Minas Gerais - MG", "Espírito Santo - ES", "Rio De Janeiro - RJ", "São Paulo - SP", "Paraná - PR", "Santa Catarina - SC", "Rio Grande Do Sul - RS", "Mato Grosso Do Sul - MS", "Mato Grosso - MT", "Goiás - GO", "Distrito Federal - DF"]
    return estados
}

function listarEstadoCivil(){
    var estadoCivil = ["Solteiro", "Casado", "Separado", "Divorciado", "Viuvo"]
    return estadoCivil
}

function listarGenero(){
    var generos = ["Masculino", "Feminino", "Não binario"]
    return generos
}



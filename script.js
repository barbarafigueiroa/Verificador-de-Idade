function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("anoNasc")//fano é de formulario do ano de nascimento
    var res = document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value) > ano){//essa parte fez uma micro validação dos dados, não deixando brecha pro usuário não informar os dados de forma correta.
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")//fsex é de formulario do sexo
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: <strong>${idade} anos</strong> `
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute("src", "bebezinho.png")
            }else if( idade >=3 && idade < 13){
                //criança
                img.setAttribute("src", "criancamenino.png")
            }else if(idade >=13 && idade < 20){
                //adolescente
                img.setAttribute("src", "jovemmenino.png")
            }else if(idade >= 20 && idade < 35){
                //jovem
                img.setAttribute("src", "jovemm.png")
            }else if(idade >=35 && idade < 55){
                //adulto
                img.setAttribute("src", "adulto.png")
            }else{
                //idoso
                img.setAttribute("src", "idoso.png")

            }
        }else if(fsex[1].checked){//aqui ja poderia ser só else, pois se n é 0 é 1
            genero = "Mulher"
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute("src", "bebezinha.png")
            }else if(idade >= 3 && idade <13){
                //criança
                img.setAttribute("src", "criancamenina.png")
            }else if(idade >= 13 && idade <20){
                //jovem
                img.setAttribute("src", "jovemmenina.png")
            }else if(idade >= 20 && idade <35){
                //adulto
                img.setAttribute("src", "jovemf.png")
            }else if(idade >= 35 && idade < 55){
                //idoso
                img.setAttribute("src", "adulta.png")
            }else{
                //idoso
                img.setAttribute("src","idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML=`Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)

    }
}
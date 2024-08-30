

const key = "cefb2263459c069f36088d4ea8cd907b"


function dataonscreen(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}   


async function buscarcidade(input) {

    const dados = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())
    
    dataonscreen(dados)
}

function botaopesquisar() {
    const input = document.querySelector(".input-search").value 

    buscarcidade(input)
}
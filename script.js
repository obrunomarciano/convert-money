const convertButton = document.querySelector(".convert-button")
const currencySelec = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // R$ Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolaToday = 5.20 // valor fictício
    const euroToday = 6.20 // valor fictício
    const libraToday = 6.50 // valor fictício


    if (currencySelec.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolaToday)
    }


    if (currencySelec.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelec.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelec.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/dolar.png"
    }


    if (currencySelec.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }


    if (currencySelec.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues() // vai chamar tudo aquilo que fizemos
}

currencySelec.addEventListener("change", changeCurrency) // quando clicar chama a função
convertButton.addEventListener("click", convertValues) // quando clicar chama a função
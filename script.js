let convertBtn = document.getElementById("convertBtn");
let amount = document.getElementById("amount");
let fromCurr = document.getElementById("fromCurr");
let toCurr = document.getElementById("toCurr");
let result = document.getElementById("result");
let reverse = document.getElementById("reverse");
const convertCurrency = async () => {
    let fromCurrency = fromCurr.value;
    let toCurrency = toCurr.value;
    let fromAmount = amount.value;
    console.log(fromCurrency)
    console.log(toCurrency)
    console.log(fromAmount)

    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${fromAmount}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b3b01a3a36msh3a72b697e8e5e71p1f64bcjsna9b08ccadffd',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.result);
        // result.getAttribute("value");
        // result.setAttribute("value", data.result)
        result.value = data.result;
        result.dispatchEvent(new Event('change'));
    } catch (error) {
        console.error(error);
    }
}

convertBtn.addEventListener("click", () => {
    if (amount.value == "") {
        alert("Please Enter amount")

    }
    else {
        convertCurrency();

    }



})

reverse.addEventListener("click", () => {
    let tempValue = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = tempValue;
    result.value = "";
    result.dispatchEvent(new Event('change'));

    fromCurr.dispatchEvent(new Event('change')); // Trigger change event on fromCurr
    toCurr.dispatchEvent(new Event('change')); // Trigger change event on toCurr 
    console.log(fromCurr.value);

})




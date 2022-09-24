let selectFrom = 'USD';
let selectTo = 'EUR';
let result = 0;
$("#selectFrom").change(()=>{
    selectFrom = $("#selectFrom").val();
    console.log(selectFrom)
});
$("#selectTo").change(()=>{
    selectTo = $("#selectTo").val();
    console.log(selectTo);
});
$("#submit").click(()=>{
    fetch(` https://v6.exchangerate-api.com/v6/4d21c797087c927518830fb8/latest/${selectFrom}`)
.then(response => {
    return (response.json());
})
.then(data=>{
    console.log(data.conversion_rates );
    console.log(parseInt(document.getElementById('input').value));
    if(selectFrom == 'USD' && selectTo == 'EUR'){
        result = parseInt(data.conversion_rates.EUR * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }
    else if(selectFrom == 'EUR' && selectTo == 'USD'){
        result = parseInt(data.conversion_rates.USD * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }
    else if(selectFrom == 'UAH' && selectTo == 'USD'){
        result = parseInt(data.conversion_rates.USD * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }
    else if(selectFrom == 'USD' && selectTo == 'UAH'){
        result = parseInt(data.conversion_rates.UAH * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }
    else if(selectFrom == 'UAH' && selectTo == 'EUR'){
        result = parseInt(data.conversion_rates.EUR * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }
    else if(selectFrom == 'EUR' && selectTo == 'UAH'){
        result = parseInt(data.conversion_rates.UAH * document.getElementById('input').value);
        document.getElementById("result").innerText = 'Result: ' + result;
    }

});
});

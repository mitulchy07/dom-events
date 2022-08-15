


document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const deposite = depositeInput.value;
    const depositeDisplay = document.getElementById('deposite-display');
    depositeDisplay.innerText = deposite;
})


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdraw = withdrawInput.value;
    const withdrawDisplay = document.getElementById('withdraw-display');
    withdrawDisplay.innerText = withdraw;
})
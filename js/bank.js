   const balance = document.getElementById('balance-display');
    const finalBalance = balance.innerText;
    const displayBalance = parseFloat(finalBalance);
    console.log(displayBalance);


document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const deposite = depositeInput.value;
    const newDeposite = parseFloat(deposite);
    const depositeDisplay = document.getElementById('deposite-display');
    const newDepositeDisplay = depositeDisplay.innerText;
    const currentDepositeDisplay = parseFloat(newDepositeDisplay);
    const totalDeposite = newDeposite + currentDepositeDisplay;
    depositeDisplay.innerText = totalDeposite;
    balance.innerText = totalDeposite + displayBalance; 
})






document.getElementById('withdraw-button').addEventListener('click', function(){
     const withdrawInput = document.getElementById('withdraw-input');
    const withdraw = withdrawInput.value; 
    const newWithdraw = parseFloat(withdraw); 
    if(displayBalance < newWithdraw){
        alert('Balance Low!!!');
        return;

    }
    
     const withdrawDisplay = document.getElementById('withdraw-display');
    const newWithdrawDisplay = withdrawDisplay.innerText;
    const currentWithdrawDisplay = parseFloat(newWithdrawDisplay);
    const totalWithdraw = newWithdraw + currentWithdrawDisplay;
    withdrawDisplay.innerText = totalWithdraw;
    balance.innerText = displayBalance - totalWithdraw; 
 
   

    
})






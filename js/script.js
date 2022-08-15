document.getElementById('button-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    if(email === 'hasan@gmail.com' && password === '12345'){
        window.location.href = 'bank.html'
    }
    else{
       alert('Warning!!! Invalid User.');
    }
     
})



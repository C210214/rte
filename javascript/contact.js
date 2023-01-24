function myFunction(){
    let x = document.getElementById('send');
    let email = document.getElementById('email').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        x.style.display = 'flex';
    }
    else
    {
        x.style.display = 'none';
    }  
}


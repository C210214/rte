function validate(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let submitemail = document.getElementById('submitemail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
        form.classList.add('valid');
        submitemail.style.display = 'block';
    }
    else
    {
        form.classList.remove('valid');
        submitemail.style.display = 'none';
    }
}

var btn = document.getElementById("submitemail");
submitemail.onclick = function(){
    setTimeout(function () {
        location.href = "thanks.html";
    }, 1500);
}
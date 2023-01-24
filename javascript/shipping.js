function getddl(){
    var x = document.getElementById("mySelect").value;
    document.getElementById('one').innerHTML ="¥" + x;
    document.getElementById('three').innerHTML ="¥" + x*2;
}

setTimeout(()=>{
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}, 1500)

onclick = setTimeout(function(){
    getddl();
}, 2000);


$(function(){

    $('#text1').hide();

    setTimeout(function(){
        $('#text1').fadeIn('slow');
    },1500);

});
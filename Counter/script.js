const dec = document.getElementById("dec");
const reset = document.getElementById('reset');
const inc = document.getElementById('inc');
const cont = document.getElementById('cont');

let count = 0;

dec.addEventListener('click', function() {
    count -= 1;
    cont.innerHTML = count;
});

reset.addEventListener('click', function() {
    count = 0;
    cont.innerHTML = count;
});

inc.addEventListener('click', function() {
    count += 1;
    cont.innerHTML = count;
});
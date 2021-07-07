
var count = 0;

document.getElementById('countup').addEventListener("click", () => {
    count++;

    document.getElementById('counter').innerHTML = count;
});

document.getElementById('countdown').addEventListener("click", () => {
    count--;

    document.getElementById('counter').innerHTML = count;
});

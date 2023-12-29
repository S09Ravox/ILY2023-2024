
function heartoff() {
    document.getElementById('main').style.display = 'flex';
    document.getElementById('heart').style.display = 'none';
}
window.addEventListener('load',function() {
    setTimeout(heartoff, 15000);
});
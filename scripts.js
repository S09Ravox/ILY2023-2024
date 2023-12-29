
function heartoff() {
    document.getElementById('main').style.display = 'flex';
    document.getElementById('heart').style.display = 'none';
    document.getElementById('heartpulse').style.display = 'block';
}
window.addEventListener('load',function() {
    setTimeout(heartoff, 15000);
});
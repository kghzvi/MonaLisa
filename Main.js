const eye1 = document.getElementById('Eye1');
const eye2 = document.getElementById('Eye2');


window.addEventListener('mousemove', e => {
    cursorX = e.clientX;    
    cursorY = e.clientY;    
    x = cursorX - 272;
    y = -1 * (cursorY - 210);
    var phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye1.style.left = 30 * Math.cos(phi) + 230;
    eye1.style.top = -60 * Math.sin(phi) + 150;

    x = cursorX - 448;
    y = -1 * (cursorY - 210);
    phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye2.style.left = 30 * Math.cos(phi) + 400;
    eye2.style.top = -60 * Math.sin(phi) + 150;

    
});
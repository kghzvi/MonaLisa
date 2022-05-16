const eye1 = document.getElementById('LeftEye');
const eye2 = document.getElementById('RightEye');


window.addEventListener('mousemove', e => {
    cursorX = e.clientX;  
    cursorY = e.clientY;    
    x = cursorX - 208;
    y = -1 * (cursorY - 193);
    var phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye1.style.left = 5 * Math.cos(phi) + 195;
    eye1.style.top = -2 * Math.sin(phi) + 176;

    x = cursorX - 259;
    y = -1 * (cursorY - 192);
    phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye2.style.left = 6 * Math.cos(phi) + 251;
    eye2.style.top = -2 * Math.sin(phi) + 182;    
});

window.addEventListener('touchmove', e => {
    cursorX = e.clientX;  
    cursorY = e.clientY;    
    x = cursorX - 208;
    y = -1 * (cursorY - 193);
    var phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye1.style.left = 5 * Math.cos(phi) + 195;
    eye1.style.top = -2 * Math.sin(phi) + 176;

    x = cursorX - 259;
    y = -1 * (cursorY - 192);
    phi = Math.atan(y/x);
    if (x<0) {phi = phi + Math.PI}
    if (x>0 && y<0) {phi = phi + 2*Math.PI}    
    eye2.style.left = 6 * Math.cos(phi) + 251;
    eye2.style.top = -2 * Math.sin(phi) + 182;    
});
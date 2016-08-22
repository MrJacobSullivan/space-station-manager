let button = document.createElement('button');
button.textContent = 'Exit';
button.addEventListener('click', () => {
    var window = remote.getCurrentWindow();
    window.close();
}, false)
document.body.appendChild(button);

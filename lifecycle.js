let exitButton = document.createElement('button');
exitButton.textContent = 'Exit';
exitButton.addEventListener('click', () => {
    var window = remote.getCurrentWindow();
    window.close();
}, false)
document.body.appendChild(exitButton);

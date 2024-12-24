import { addresses } from './addresses.js'
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const labelsContainer = document.querySelector('.labels-container')

addresses.forEach(address => {
    if (address.isOnChristmasList) {
        const label = document.createElement('div');
        label.classList.add('label');

        // Create left icon
        const leftIcon = document.createElement('span');
        leftIcon.classList.add('label-icon', 'left');
        leftIcon.innerHTML = `<img src="icons/tree.png" alt="Christmas Tree" style="width: 24px; height: 24px;">`; // Christmas tree icon

        // Create right icon
        const rightIcon = document.createElement('span');
         rightIcon.classList.add('label-icon', 'right');
        rightIcon.innerHTML = `<img src="icons/gifts.png" alt="Gifts" style="width: 24px; height: 24px;">`; // Gift icon

        // Create label text
        const labelText = document.createElement('div');
        labelText.classList.add('label-text');
        labelText.innerHTML = `
            <strong>${address.name}</strong><br />
            <em>${address["address line 1"]}</em>,<br />
            ${address.town}, ${address.state}, ${address.country}
        `;

        // Append elements to the label
        label.appendChild(leftIcon);
        label.appendChild(labelText);
        label.appendChild(rightIcon);

        // Append the label to the container
        labelsContainer.appendChild(label);
    }
});

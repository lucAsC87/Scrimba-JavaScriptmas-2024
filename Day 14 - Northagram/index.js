/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/

import { feedData } from './data.js'

const avatarContainer = document.getElementById('avatar-container');
const imageContainer = document.getElementById('image-container');
const messageContainer = document.getElementById('message');

let currentFriendIndex = 0;
let currentImageIndex = 0;

function displayAvatars() {
    feedData.forEach(friend => {
        const avatar = document.createElement('img');
        avatar.src = friend.avatarUrl;
        avatar.alt = `${friend.handle}'s avatar`;
        avatar.className = 'avatar';
        avatarContainer.appendChild(avatar);
    });
}

function cycleImages() {
    if (currentFriendIndex >= feedData.length) {
        imageContainer.innerHTML = '';
        messageContainer.textContent = "Refresh to load latest images";
        return;
    }

    const currentFriend = feedData[currentFriendIndex];
    const images = currentFriend.features;

    const avatars = document.querySelectorAll('.avatar');
    avatars[currentFriendIndex].classList.add('highlight');

    imageContainer.innerHTML = `<img src="${images[currentImageIndex].imageUrl}" alt="${images[currentImageIndex].alt}" class="feature-image">`;

    const interval = setInterval(() => {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
            avatars[currentFriendIndex].classList.remove('highlight');
            currentFriendIndex++;
            clearInterval(interval);
            cycleImages();
        } else {
            imageContainer.innerHTML = `<img src="${images[currentImageIndex].imageUrl}" alt="${images[currentImageIndex].alt}" class="feature-image">`;
        }
    }, 1500);
}

displayAvatars();
cycleImages();

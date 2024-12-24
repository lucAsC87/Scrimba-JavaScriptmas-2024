const calendarContainer = document.getElementById('calendar');

function updateBoxStatus(boxIndex, description) {
  const status = localStorage.getItem(`boxStatus_${boxIndex}`);
  if (status === "OPENED") {
    description.innerHTML = "OPENED!";
  }
}

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  updateBoxStatus(i, description);
  description.addEventListener("click", function () {
    description.innerHTML = "OPENED!";
    localStorage.setItem(`boxStatus_${i}`, "OPENED");
  });
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];


/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const generateBtn = document.getElementById('generate-btn');
    const elfNameDisplay = document.getElementById('elf-name-display');
    const elfNamesList = document.getElementById('elf-names-list');

    generateBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get user input
        const firstName = form['first-name'].value.trim();
        const lastName = form['last-name'].value.trim();

        // Get initials
        const firstInitial = firstName.charAt(0).toUpperCase();
        const lastInitial = lastName.charAt(0).toUpperCase();

        // Find matching elf names based on initials
        const firstNameIndex = elfFirstNames.findIndex(name => name.charAt(0).toUpperCase() === firstInitial);
        const lastNameIndex = elfLastNames.findIndex(name => name.charAt(0).toUpperCase() === lastInitial);

        // Generate elf name
        const elfFirstName = firstNameIndex !== -1 ? elfFirstNames[firstNameIndex] : elfFirstNames[Math.floor(Math.random() * elfFirstNames.length)];
        const elfLastName = lastNameIndex !== -1 ? elfLastNames[lastNameIndex] : elfLastNames[Math.floor(Math.random() * elfLastNames.length)];

        const generatedElfName = `${elfFirstName} ${elfLastName}`;

        // Display the generated elf name
        elfNameDisplay.textContent = generatedElfName;

        // Check if the list is empty and remove the "Seems empty..." message
        if (elfNamesList.children.length === 1 && elfNamesList.children[0].textContent === "Seems empty...") {
            elfNamesList.innerHTML = ''; // Clear the list
        }

        // Add the generated elf name to the registered employees list
        const listItem = document.createElement('li');
        listItem.textContent = generatedElfName;
        elfNamesList.appendChild(listItem);
    });
});

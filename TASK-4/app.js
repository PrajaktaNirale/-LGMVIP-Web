// Get the calculator screen element
const screen = document.getElementById('screen');

// Add a value to the calculator screen
function addToScreen(value) {
  screen.value += value;
}

// Clear the calculator screen
function clearScreen() {
  screen.value = '';
}

// Remove the last character from the calculator screen
function backspace() {
  screen.value = screen.value.slice(0, -1);
}

// Calculate the result and display it on the screen
function calculate() {
  try {
    const result = eval(screen.value);
    screen.value = result;
  } catch (error) {
    screen.value = 'Error';
  }
}

//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Select form elements
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const submitBtn = document.getElementById("btn");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    // Validation: Check if inputs are empty
    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    // Create a promise for age validation
    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); // 4-second delay
    });

    // Handle the promise resolution and rejection
    agePromise
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });
});
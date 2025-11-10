document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  // Step 1: Validate inputs
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Step 2: Create Promise
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Step 3: Handle Promise result
  checkAge
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

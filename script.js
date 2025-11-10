document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);

  // ✅ Improved validation
  if (!name || isNaN(age) || age <= 0) {
    alert('Please enter valid details.');
    return;
  }

  // ✅ Promise logic
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 2500); // Reduced delay for better user experience
  });

  // ✅ Handling Promise resolution/rejection
  checkAge
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector("#name-field").value,
    age: document.querySelector("#age-field").value,
    occupation: document.querySelector("#occupation-field").value,
  };

  fetch("/api/profile", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document
        .querySelector("#profiles")
        .insertAdjacentHTML(
          "beforeend",
          ` <li>${data.fullname} the ${data.occupation} is ${data.age}</li>`
        );
    });
}

document
  .querySelector("#profile-form")
  .addEventListener("submit", submitProfile);

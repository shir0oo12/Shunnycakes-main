document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  let formData = new FormData(this);

  try {
    let response = await fetch(this.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      showPopup("Message Sent Successfully!");
      this.reset();
    } else {
      showPopup("Oops! Something went wrong..");
    }
  } catch (error) {
    showPopup("Error: " + error.message);
  }
});

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.querySelector("h3").textContent = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}

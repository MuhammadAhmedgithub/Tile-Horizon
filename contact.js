document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const getLocationButton = document.getElementById("getLocation");

    getLocationButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });

    function showPosition(position) {
        const locationInput = document.getElementById("location");
        locationInput.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        alert("Location has been added to the form.");
    }

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const contactData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            phone: formData.get("phone"),
            zip: formData.get("zip"),
            email: formData.get("email"),
            message: formData.get("message"),
            location: formData.get("location")
        };

        localStorage.setItem("contactData", JSON.stringify(contactData));
        alert("Your contact information has been saved!");
        contactForm.reset();
    });
});

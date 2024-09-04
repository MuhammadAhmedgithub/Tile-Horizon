document.addEventListener("DOMContentLoaded", () => {
    const tileForm = document.getElementById("tileForm");
    const reviewsContainer = document.getElementById("reviewsContainer");

    tileForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(tileForm);

        const tileA = {
            name: formData.get("tileAName"),
            material: formData.get("materialA"),
            size: formData.get("sizeA"),
            price: formData.get("priceA"),
            durability: formData.get("durabilityA"),
            applications: formData.get("applicationsA"),
            image: URL.createObjectURL(formData.get("tileAImage"))
        };

        const tileB = {
            name: formData.get("tileBName"),
            material: formData.get("materialB"),
            size: formData.get("sizeB"),
            price: formData.get("priceB"),
            durability: formData.get("durabilityB"),
            applications: formData.get("applicationsB"),
            image: URL.createObjectURL(formData.get("tileBImage"))
        };

        const review = formData.get("userReview");

        localStorage.setItem("tileA", JSON.stringify(tileA));
        localStorage.setItem("tileB", JSON.stringify(tileB));
        localStorage.setItem("review", review);

        displayComparison();
        displayReview(review);
    });

    function displayComparison() {
        const tileA = JSON.parse(localStorage.getItem("tileA"));
        const tileB = JSON.parse(localStorage.getItem("tileB"));

        if (tileA && tileB) {
            document.getElementById("tileANameDisplay").textContent = tileA.name;
            document.getElementById("materialADisplay").textContent = tileA.material;
            document.getElementById("sizeADisplay").textContent = tileA.size;
            document.getElementById("priceADisplay").textContent = tileA.price;
            document.getElementById("durabilityADisplay").textContent = tileA.durability;
            document.getElementById("applicationsADisplay").textContent = tileA.applications;
            document.getElementById("tileAImageDisplay").src = tileA.image;

            document.getElementById("tileBNameDisplay").textContent = tileB.name;
            document.getElementById("materialBDisplay").textContent = tileB.material;
            document.getElementById("sizeBDisplay").textContent = tileB.size;
            document.getElementById("priceBDisplay").textContent = tileB.price;
            document.getElementById("durabilityBDisplay").textContent = tileB.durability;
            document.getElementById("applicationsBDisplay").textContent = tileB.applications;
            document.getElementById("tileBImageDisplay").src = tileB.image;
        }
    }

    function displayReview(review) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review-card");
        reviewElement.textContent = review;
        reviewsContainer.appendChild(reviewElement);
    }

    // Display existing data on load
    displayComparison();
    const existingReview = localStorage.getItem("review");
    if (existingReview) {
        displayReview(existingReview);
    }
});

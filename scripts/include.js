// Function to dynamically include header and footer
const includeHTML = () => {
    document.querySelectorAll(".header-include").forEach(header => {
        fetch("header.html")
            .then(response => response.text())
            .then(data => header.innerHTML = data);
    });

    document.querySelectorAll(".footer-include").forEach(footer => {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => footer.innerHTML = data);
    });
};

includeHTML();
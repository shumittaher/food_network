

document.addEventListener("DOMContentLoaded", function () {
    const midSection = document.querySelector("#mid-section");
    const midSectionPicture = midSection.querySelector(".picture_section")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                midSectionPicture.classList.remove("outside_left")
            }
        });
    }, { threshold: 0.7 });

    observer.observe(midSection);
});



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

    updateActiveStatus()
});

function updateActiveStatus() {
    
    let links = top_bar.querySelectorAll(".nav-link")
    let activeRoute = location.pathname
    
    links.forEach((link)=>{
        
        if (link.pathname==activeRoute) {
            link.classList.add("active")
            link.ariaCurrent = "page"
        } else {
            link.classList.remove("active")
            link.removeAttribute("ariaCurrent")
        }

    })

    document.addEventListener('scroll', ()=>{
            
        if (window.scrollY === 0) {
            top_bar.classList.add("at_top", activeRoute=='/'?"navbar-dark":"_");
            top_bar.classList.remove("not_at_top"); 
        } else {
            top_bar.classList.add("not_at_top");
            top_bar.classList.remove("at_top", activeRoute=='/'?"navbar-dark":"_");
        }
            
    })


}
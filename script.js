/*MENU*/
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "abrir-icone.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "fechar-icone.svg";
    }
}

/*ROLAMENTO PARA AS PAGINAS QUANDO CLICADAS*/
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    
    scrollLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

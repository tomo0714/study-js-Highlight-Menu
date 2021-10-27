// Function
const highlightMenu = () => {
    for(let i = 1; i <= 4; i++) {
        // DOM
        const section = document.querySelector(`main section:nth-child(${i})`);
        const list = document.querySelector(`nav ul li:nth-child(${i})`);
        const lists = Array.from(document.querySelectorAll('nav ul li'));

        // constant
        const gap = 300;

        // highlight
        if(section.offsetTop - gap < window.scrollY) {
            lists.forEach(li => {
                li.classList.remove('current');
            });
            list.classList.add('current');
        }
    }
};

// Event
window.addEventListener('scroll', highlightMenu);

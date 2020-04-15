require('./style/main.scss');
require('./slider');


const collapsedItems = document.querySelectorAll('.collapse');


collapsedItems.forEach(it => it.addEventListener('click', function(e) {
    const { dataset } = e.target
    if (dataset.action === "toggle") {
        e.preventDefault();
        this.classList.toggle('active');
    }
}))


const buttonToggleMenu = document.querySelector('.toggle-menu');


buttonToggleMenu.addEventListener('click', () => {
    const menu = document.querySelector('.nav-container');
    menu.classList.toggle('active');
})
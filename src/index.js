require('./style/main.scss');
require('./slider');


const collapsedItems = document.querySelectorAll('.collapse');


collapsedItems.forEach(it => it.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
}))
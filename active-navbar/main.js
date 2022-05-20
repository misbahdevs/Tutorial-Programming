const select = (el, all=false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const list = select('li', true);
list.forEach(lis => {
    lis.addEventListener('click', function() {
        list.forEach(lis => lis.classList.remove('active'));
        lis.classList.add('active');
    })
});
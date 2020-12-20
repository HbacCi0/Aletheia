const burger = document.querySelector("#burger");
const share = document.querySelector('#share');
const share_menu = document.querySelector('.share_menu');
const arrow_back = document.querySelector('#arrow');
const copy_link = document.querySelector('#link');
const verified = document.querySelector('#verified');


burger.addEventListener('click', () => {
    burger.classList.toggle('rotate');
})

share.addEventListener('click', () => {
    share_menu.classList.toggle('open');
    verified.classList.remove('copied');
})

arrow_back.addEventListener('click', () => {
    share_menu.classList.toggle('open');
})

copy_link.addEventListener('click', () => {
    var copytext = document.getElementById('copyText');
    copytext.select();
    document.execCommand('copy');
    verified.classList.add('copied');
})
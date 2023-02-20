const burger = document.querySelector('.burger')
const sidebar = document.querySelector('#sidebar')
const links = document.querySelectorAll('#sidebar ul li a')

burger.addEventListener('click', ()=> {
    sidebar.classList.toggle('is-active')
    burger.classList.toggle('is-active')
})

links.forEach(link => link.addEventListener('click', ()=>{
    links.forEach(link => link.classList.remove('is-active'))
    link.classList.add('is-active')

    sidebar.classList.remove('is-active')
    burger.classList.remove('is-active')
}))

// AOS
AOS.init({
    duration: 900,
});
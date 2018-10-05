document.querySelectorAll('a[data-scroll]').forEach(a => {
    a.addEventListener('click', () => document.querySelector(a.getAttribute('data-scroll')).scrollIntoView({ behavior: "smooth" }))
})
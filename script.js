let heart = document.querySelector('.heart')
let wrapper2 = document.querySelector('.wrapper2')

heart.addEventListener('click', () => {

    heart.style.opacity = '0'

    setTimeout(() => {
        heart.parentElement.remove()
        wrapper2.style.display = 'flex'
    }, 600)
})
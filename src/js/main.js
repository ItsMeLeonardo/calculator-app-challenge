
const position = ['.15rem', '1.3rem', '3rem']
const themes = document.querySelectorAll('.calc__label')

themes.forEach((theme, index) => {
    theme.addEventListener('click', () => {
        document.documentElement.style.setProperty('--theme-position', position[index])
    })
})
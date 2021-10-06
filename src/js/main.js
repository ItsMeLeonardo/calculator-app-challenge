
const position = ['.15rem', '1.3rem', '3rem']
const classThemes = ['', 'theme-light', 'theme-purple']
const themes = document.querySelectorAll('.calc__label'),
    body = document.querySelector('body')

themes.forEach((theme, index) => {
    theme.addEventListener('click', () => {
        document.documentElement.style.setProperty('--theme-position', position[index])
        body.setAttribute('class', classThemes[index])
    })
})
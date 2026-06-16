const panels= document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        actionRemove()
        panel.classList.add('active')
    })
})

function actionRemove() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
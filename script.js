const checkboxes = document.querySelectorAll(`.info input`)
const info_spans = document.querySelectorAll(`.info span`)
const menu_button = document.querySelector('#menu_button')
const x = document.querySelector('#x')

checkboxes.forEach((checkbox, index) => {
    checkbox.onclick = () => {
        if (checkbox.checked) {
            info_spans[index].style.textDecoration = 'line-through'
        } else {
            info_spans[index].style.textDecoration = 'none'
        }
    }
})

menu_button.onclick = () => {
    open()
    
}

x.onclick = () => {
    close()
}


const checkboxes = document.querySelectorAll(`.info input`)
const info_spans = document.querySelectorAll(`.info span`)
const menu_button = document.querySelector('#menu_button')
const elem = document.querySelector('.elem')
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

const tasks = [
    { id: 1, title: '', isDone: false, date: '' },
    { id: 2, title: '', isDone: false, date: '' },
    { id: 3, title: '', isDone: false, date: '' },
    { id: 4, title: '', isDone: false, date: '' },
]

function reload(arr) {
    for (let item of arr) {
        const task = document.createElement('div')
        const info = document.createElement('div')
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        const text = document.createElement('div')
        const title = document.createElement('span')
        const date = document.createElement('p')
        const actions = document.createElement('div')
        const button_delete = document.createElement('span')
        const button_save = document.createElement('span')

        task.classList.add('task')
        info.classList.add('info')
        actions.classList.add('actions')

        title.textContent = item.title;
        date.textContent = item.date;
        checkBox.checked = item.isDone;
        button_save.innerHTML = `<svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="rgba(131,123,123)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-delete">
                        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                        <line x1="18" y1="9" x2="12" y2="15"></line>
                        <line x1="12" y1="9" x2="18" y2="15"></line>
                    </svg>`
        button_delete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 48 48"
                        fill="rgba(131,123,123)">
                        <path
                            d="M 22 1 C 19.802666 1 18 2.8026661 18 5 L 18 6 L 9 6 C 7.3555411 6 6 7.3544268 6 9 L 6 11 C 6 12.645573 7.3555411 14 9 14 L 33 14 A 1.0001 1.0001 0 1 0 33 12 L 9 12 C 8.4364589 12 8 11.564427 8 11 L 8 9 C 8 8.4355732 8.4364589 8 9 8 L 19 8 A 1.0001 1.0001 0 0 0 20 7 L 20 5 C 20 3.8833339 20.883334 3 22 3 L 26 3 C 27.116666 3 28 3.8833339 28 5 L 28 7 A 1.0001 1.0001 0 0 0 29 8 L 39 8 C 39.563541 8 40 8.4355732 40 9 L 40 11 C 40 11.564427 39.563541 12 39 12 L 38 12 A 1.0001 1.0001 0 0 0 37 13.003906 L 37.105469 40.080078 C 37.060923 41.715433 35.743427 43 34.107422 43 L 14.025391 43 C 12.348977 43 11.014814 41.656796 11.025391 39.980469 A 1.0001 1.0001 0 0 0 11.025391 39.974609 L 11 16.998047 A 1.0001 1.0001 0 1 0 9 17.001953 L 9.0253906 39.96875 C 9.0079668 42.730423 11.263804 45 14.025391 45 L 34.107422 45 C 36.805417 45 39.032014 42.831411 39.105469 40.134766 A 1.0001 1.0001 0 0 0 39.105469 40.103516 L 39.003906 13.998047 C 40.646254 13.995478 42 12.64401 42 11 L 42 9 C 42 7.3544268 40.644459 6 39 6 L 30 6 L 30 5 C 30 2.8026661 28.197334 1 26 1 L 22 1 z M 16.984375 19.986328 A 1.0001 1.0001 0 0 0 16 21 L 16 38 A 1.0001 1.0001 0 1 0 18 38 L 18 21 A 1.0001 1.0001 0 0 0 16.984375 19.986328 z M 23.984375 19.986328 A 1.0001 1.0001 0 0 0 23 21 L 23 38 A 1.0001 1.0001 0 1 0 25 38 L 25 21 A 1.0001 1.0001 0 0 0 23.984375 19.986328 z M 30.984375 19.986328 A 1.0001 1.0001 0 0 0 30 21 L 30 38 A 1.0001 1.0001 0 1 0 32 38 L 32 21 A 1.0001 1.0001 0 0 0 30.984375 19.986328 z">
                        </path>
                    </svg>`

        text.append(title, date)
        info.append(checkBox, text)
        actions.append(button_delete, button_save)
        task.append(info, actions)
        elem.append(task)
    }
}

reload(tasks)
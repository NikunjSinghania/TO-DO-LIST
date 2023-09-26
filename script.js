let arr = JSON.parse(window.localStorage.getItem("todolist")) || [];

class Obj {
    constructor(name, status) {
        this.name = name
        this.status = status
    }

}


for (let i = 0; i < arr.length; i++) {
    let el = document.createElement('span')
    let status = document.createElement('input')
    let delButton = document.createElement('i')
    let name = document.createElement('p')

    status.setAttribute('type', 'checkbox')
    if(arr[i].status)
    status.setAttribute('checked', arr[i].status)
    name.innerText = arr[i].name
    delButton.setAttribute('class', 'del fa-solid fa-trash')
    // delButton.innerHTML = `<i class="fa-solid fa-trash"></i>`

    status.addEventListener('change', (e) => {
        let child = e.target.parentNode
        let parent = child.parentNode

        let i = Array.prototype.indexOf.call(parent.children, child)

        arr[i].status = e.target.checked

        window.localStorage.setItem("todolist", JSON.stringify(arr))
    })

    delButton.addEventListener('click', (e) => {
        let child = e.target.parentNode
        let parent = child.parentNode

        let i = Array.prototype.indexOf.call(parent.children, child)
        child.remove()

        let arr1 = arr.slice(0, i)
        let arr2 = arr.slice(i + 1)

        arr = [...arr1, ...arr2];
        window.localStorage.setItem("todolist", JSON.stringify(arr))

    })

    el.append(name)
    el.append(status)

    el.append(delButton)

    el.setAttribute('class', 'work')
    document.querySelector('#collection').append(el)
}



document.querySelector('#add').addEventListener('click', (e) => {

    arr.push(new Obj(document.querySelector('#name').value, false))

    window.localStorage.setItem("todolist", JSON.stringify(arr))


    let el = document.createElement('span')
    let status = document.createElement('input')
    let delButton = document.createElement('i')
    let name = document.createElement('p')

    status.setAttribute('type', 'checkbox')
    status.setAttribute('checked', false)
    name.innerText = document.querySelector('#name').value
    delButton.setAttribute('class', 'del fa-solid fa-trash')

    el.append(name)
    el.append(status)

    el.append(delButton)

    el.setAttribute('class', 'work')
    document.querySelector('#collection').append(el)

    status.addEventListener('change', (e) => {
        let child = e.target.parentNode
        let parent = child.parentNode

        let i = Array.prototype.indexOf.call(parent.children, child)

        arr[i].status = e.target.checked

        window.localStorage.setItem("todolist", JSON.stringify(arr))
    })

    delButton.addEventListener('click', (e) => {
        let child = e.target.parentNode
        let parent = child.parentNode

        let i = Array.prototype.indexOf.call(parent.children, child)
        child.remove()

        let arr1 = arr.slice(0, i)
        let arr2 = arr.slice(i + 1)

        arr = [...arr1, ...arr2];
        window.localStorage.setItem("todolist", JSON.stringify(arr))
    })

})
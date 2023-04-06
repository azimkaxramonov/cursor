let mouse = document.querySelector('.mouse')


function hover() {
    window.onmousemove = (event) => {

        let x = event.clientX
        let y = event.clientY
        mouse.style.top = `${y}px`
        mouse.style.left = `${x}px`
        
    }
}
hover()

function kungfu() {
    
    mouse.classList.remove('one')
    mouse.classList.remove('d14')
    mouse.classList.remove('d21')
    mouse.classList.add('d3')
    hover()

}


function ru() {
    mouse.classList.add('d14')
    mouse.classList.remove('one')
    mouse.classList.remove('d3')
    mouse.classList.remove('d21')
    hover()

}
function kung() {
    mouse.classList.remove('d3')
    mouse.classList.remove('one')
    mouse.classList.remove('d14')
    mouse.classList.add('d21')

    hover()

}

function reset() {
    mouse.classList.add('one')
    mouse.classList.remove('d14')
    mouse.classList.remove('d3')
    mouse.classList.remove('d21')
    hover()

}

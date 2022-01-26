const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I Love Programing!'
let idx = 1
let speed = 300 / speedEl.ariaValueMax

 writeText()

 function writeText() {
     textEl.innerHTML = text.slice(0, idx)

     idx++

     if(idx > text.length) {
         idx = 1
     }

     setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
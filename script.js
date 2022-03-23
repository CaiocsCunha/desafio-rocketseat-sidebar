let Btn = document.querySelector('#menuBtn')
let aside = document.querySelector('aside')

Btn.onclick = function () {
  aside.classList.toggle('close')
}

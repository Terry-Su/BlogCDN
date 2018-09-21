add()
add()

const throttled = _.throttle( scrolling, 10 )
window.addEventListener( 'scroll', throttled )

function scrolling() {
  const boxes = document.getElementsByClassName( 'box' )
  const last = boxes[ boxes.length - 1 ]
  const { bottom }  = last.getBoundingClientRect()
  const { height }  = document.body.getBoundingClientRect()

  const shouldAdd = bottom <= height + 20

  shouldAdd && add()

  shouldAdd && console.log( 'add more boxes' )
}

function add() {
  const html = document.getElementById( 'template' ).innerHTML
  document.body.innerHTML += html
}

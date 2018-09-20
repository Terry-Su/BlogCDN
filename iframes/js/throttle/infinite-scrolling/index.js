add()
add()

const throttled = _.throttle( scrolling, 200 )
window.addEventListener( 'scroll', throttled )

function scrolling() {
  const boxes = document.getElementsByClassName( 'box' )
  const last = boxes[ boxes.length - 1 ]
  const { bottom }  = last.getBoundingClientRect()
  const { height }  = document.body.getBoundingClientRect()

  const shouldAdd = height - bottom >= 0

  shouldAdd && add()

  shouldAdd && console.log( 'add more boxes' )
}

function add() {
  const html = document.getElementById( 'template' ).innerHTML
  document.body.innerHTML += html
}

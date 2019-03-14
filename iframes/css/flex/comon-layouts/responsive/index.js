const el = document.getElementsByClassName( 'container' )[ 0 ]

let count = 0
const animate  = function() {
  if ( count > 100 ) {
    count = -0.3
  } 

  count += 0.3

  el.style.width = count + '%'
  window.requestAnimationFrame( animate )
}


animate()
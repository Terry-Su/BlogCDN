const { width, height } = document.body.getBoundingClientRect()

const containers = Array.from( document.getElementsByTagName( 'div' ) )

containers.map( function ( container, index ) {
  const canvas =container.querySelector( 'canvas' )
  canvas.setAttribute( 'width', width )
  canvas.setAttribute( 'height', height * 0.5 )
  const ctx = canvas.getContext( '2d' )

  const button =container.querySelector( 'button' )

  const funcMap = {
    '0': function() {
      ctx.fillStyle = 'red'
      canvas.onmousemove = drawCircle
    },
    '1': function() {
      ctx.fillStyle = 'blue'
      canvas.onmousemove = _.throttle( drawCircle, 300 )
    },
  }

  const func = funcMap[ index ]

  func()

  button.onclick = function(){ clearCanvas( canvas ) }

  function drawCircle( event ) {
    const { x, y } = event
    const { left, top } = canvas.getBoundingClientRect()
    
    const cx = x - left
    const cy = y - top
    ctx.fill( getCircle( cx, cy ) )
  }
} )


function getCircle( x, y, r=2 ) {
  const path = new Path2D()
  path.arc(x, y, r, 0, 2 * Math.PI);
  return path
}

function clearCanvas( canvas ) {
  const { width, height } = canvas.getBoundingClientRect()
  canvas.getContext('2d').clearRect(
    0,
    0,
    width,
    height
  )
}

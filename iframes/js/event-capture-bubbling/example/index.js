const boxes = document.getElementsByClassName( 'box' )

Array.prototype.map.call( boxes, (box, index) => {
  const inner = box.children[ 0 ]
  
  const boxUsesCapture = index === 0 || index === 1
  const innerUsesCapture = index === 0 || index === 3
  
  
  box.addEventListener( 'click', (e) => {
    twinkle( box )
  }, boxUsesCapture)
  
  inner.addEventListener( 'click', (e) => {
    twinkle( inner )
  }, innerUsesCapture)
  
  
  let twinkleCount = 0
  function twinkle( el, delay = 0, last = 500 ) {
  setTimeout( () => {
    el.style.border = '3px solid orange'
    
    setTimeout( () => {
      el.style.border = 'none'
      twinkleCount = 0
    }, last )
  }, delay + twinkleCount )
  twinkleCount = twinkleCount + 500
}
} )





const dom = document.getElementById( 'binding' )
const data = {
  value: 'A'
}

bind( data, dom )


data.value = 'B'
data.value = 'C'


function bind( data, dom ) {
  assign()
  observe( data, onDataChange )

  function onDataChange() {
    assign()
  }
}

function assign() {
  dom.innerHTML = data.value
}

function observe( object, onChange ) {
  for ( let key in object ) {
    let value = object[ key ]
    Object.defineProperty( object, key, {
      get() {
        return value
      }, 
      set( newValue ) {
        value = newValue
        onChange( { object, key, value } )
      }
    } )
  }
  return object
}
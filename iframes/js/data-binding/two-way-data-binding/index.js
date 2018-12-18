const input = document.getElementById( 'binding' )
window.data = {
  value: 'A'
}

bind( data, input )


data.value = 'B'
data.value = 'C'


function bind( data, input ) {
  assignDataToInput()
  observeInput( input, onInputChange )
  observeData( data, onDataChange )

  function onInputChange( event ) {
    const { value } = event.target
    if ( value !== data.value ) {
      data.value = value

      console.log( 'value', data.value )
    }
    
  }

  function onDataChange() {
    assignDataToInput()
  }
}

function assignDataToInput() {
  if ( input.value !== data.value ) {
    input.value = data.value
  }
}

function observeInput( input, onChange ) {
  input.addEventListener( 'input', onChange )
}

function observeData( object, onChange ) {
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

const btnA = document.getElementById('btnA')
const btnB = document.getElementById('btnB')
const logContainer = document.getElementById('logContainer')
let count = 0

btnA.onclick =  debounceA( log, 1000 )
btnB.onclick =  debounceB( log, 1000 )

function log() {
  count = count + 1
  logContainer.innerHTML = ( '<li>Searched ' + count + ' time' +  (count === 1 ? '' : 's') + '</li>' )
}

function debounceA( func, wait = 0 ) {
  let timer
  
  function debounced( ...args ) {
    const self = this
    if ( timer == null ) {
      addTimer()
      return
    }

    if ( timer != null ) {
      clearTimer()
      addTimer()
      return
    }

    function addTimer() {
      timer = setTimeout( () => {
        invokeFunc()
        clearTimer()
      }, wait )
    }

    function invokeFunc() {
      func.apply( self, args )
    }
  }

  return debounced

  function clearTimer() {
    clearTimeout( timer )
    timer = null
  }
}

function debounceB( func, wait = 0 ) {
  let timer
  
  function debounced( ...args ) {
    const self = this

    timer == null && invokeFunc()

    timer != null && clearTimer()
    
    timer = setTimeout( clearTimer, wait )

    function invokeFunc() {
      func.apply( self, args )
    }
  }

  return debounced

  function clearTimer() {
    clearTimeout( timer )
    timer = null
  }
}
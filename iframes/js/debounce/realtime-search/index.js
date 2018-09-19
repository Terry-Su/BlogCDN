const input = document.getElementById('input')
const logContainer = document.getElementById('logContainer')
let count = 0

input.addEventListener( 'input', _.debounce( log, 1000 ) )

function log() {
  count = count + 1
  logContainer.innerHTML = ( '<li>Searched ' + count + ' time' +  (count === 1 ? '' : 's') + '</li>' )
}
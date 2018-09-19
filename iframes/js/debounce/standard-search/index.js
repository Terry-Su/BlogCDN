const btn = document.getElementById('btn')
const logContainer = document.getElementById('logContainer')
let count = 0

btn.onclick =  _.debounce( log, 1000, {
  leading: true,
  trailing: false
} )

function log() {
  count = count + 1
  logContainer.innerHTML = ( '<li>Searched ' + count + ' time' +  (count === 1 ? '' : 's') + '</li>' )
}
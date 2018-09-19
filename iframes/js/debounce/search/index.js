const btnA = document.getElementById('btnA')
const btnB = document.getElementById('btnB')
const originalBtn = document.getElementById('originalBtn')
const logContainer = document.getElementById('logContainer')
let count = 0

btnA.onclick =  _.debounce( log, 1000 )
btnB.onclick =  _.debounce( log, 1000, {
  leading: true,
  trailing: false
} )
originalBtn.onclick = log

function log() {
  count = count + 1
  logContainer.innerHTML = ( '<li>Searched ' + count + ' time' +  (count === 1 ? '' : 's') + '</li>' )
}
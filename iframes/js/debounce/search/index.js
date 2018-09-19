// Original search button, without being debounced 
const originalBtn = document.getElementById('originalBtn')

// Search button using debounce mode 1
const btnA = document.getElementById('btnA')

// Search button using debounce mode 2
const btnB = document.getElementById('btnB')

const logContainer = document.getElementById('logContainer')
let count = 0


originalBtn.onclick = log
btnA.onclick =  _.debounce( log, 1000 )
btnB.onclick =  _.debounce( log, 1000, {
  leading: true,
  trailing: false
} )


function log() {
  count = count + 1
  logContainer.innerHTML = ( '<li>Searched ' + count + ' time' +  (count === 1 ? '' : 's') + '</li>' )
}
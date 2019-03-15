let myHour = document.getElementById('hour')
let myMinutes = document.getElementById('minutes')
let mySecond = document.getElementById('second')
let presentDate = document.getElementById('day')

const myClock = () => {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let second = now.getSeconds()

  if (second < 10) { second = '0' + second }
  if (minutes < 10) { minutes = '0' + minutes }
  if (hour < 10) { hour = '0' + hour }
  let currentDate = now.toDateString()

  presentDate.textContent = currentDate
  myHour.textContent = hour + ':'
  myMinutes.textContent = minutes + ':'
  mySecond.textContent = second
}

setInterval(myClock, 500)

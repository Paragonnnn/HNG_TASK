const date_time = document.getElementById('date')

const current_date_time = new Date()
const new_date_time = current_date_time.toUTCString()

date.innerHTML = `${new_date_time}`
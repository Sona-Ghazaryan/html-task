//Futures-panel real time

const date=new Date() 
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const hour=date.getHours()
const time=date.toString().slice(15,-38)
document.getElementById('date-today').innerHTML=day+"/"+month+"/"+year+"/"+time+" "+(hour>12?"PM":"AM")


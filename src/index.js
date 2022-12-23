


let data=[82.1,101.26,112.2,112.2,101.26,82.1,
          60.25,52,60.25,69.4,77.6,90,95.4,105,
          120.6,130,150,160,155,140,130,120,110,
         120,125,130,135,131,123,115,108,98,80,
         88,98,108,108,95,90,84,80]



document.querySelector('.element-container').innerHTML=data.map(elem=>`<div style="height:${elem}px" class="element"> </div>`).join('')



const date=new Date() 
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const time=date.toString().slice(15,-38)
document.getElementById('date-today').innerHTML=day+"/"+month+"/"+year+"/"+time


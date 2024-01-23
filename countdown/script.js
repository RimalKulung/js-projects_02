
const enddate= '21 january 2024 23:04'
const inputs = document.querySelectorAll('input')

document.querySelector('#end-date').innerHTML=enddate

const clock=()=>{
    const end=new Date(enddate)
    const now = new Date()
    let diff= (end-now)/1000
    
    if(diff<0){
        return
    }
    //convert into dates
    inputs[0].value=(Math.floor(diff/86400))

    inputs[1].value=(Math.floor(diff/3600)%24)

    inputs[2].value=(Math.floor(diff/60)%60)
    
    inputs[3].value=(Math.floor(diff)%60)

}


setInterval(()=>{
    clock()

},1000)

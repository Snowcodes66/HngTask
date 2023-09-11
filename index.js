const time=document.querySelector('.time')
const day=document.querySelector('.day')

const newDate=new Date()
const utcTime=newDate.getTime()
const options={
    weekday:'long',
}
const todayDate= new Intl.DateTimeFormat('en-US', options).format(newDate)
console.log(todayDate )


    time.textContent=utcTime
    day.textContent=todayDate



console.log(newDate , utcTime)

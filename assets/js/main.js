import data from '../../data.json' assert {type: 'json'}

let titleCard = document.querySelectorAll('.title')
let timeActual = document.querySelectorAll('.time')
let timeComparation = document.querySelectorAll('.routine')
let optionMenu = document.querySelectorAll('.date')
let date = 'daily'

let titles = []

for(let i = 0; i < 3; i++){
    optionMenu[i].addEventListener('click', function() {
        date = optionMenu[i].innerHTML.toLowerCase()
        if( date === 'daily') {
            timeActual.forEach(changeActualTime)
            function changeActualTime(item,index) {
                item.innerHTML = `${titles[index].timeframes.daily.current}hrs`
            }
            timeComparation.forEach(changeTimeComparation)
            function changeTimeComparation(item,index) {
                item.innerHTML = `Last ${date} - ${titles[index].timeframes.daily.previous}hrs`
            }
        } else if(date === 'weekly') {
            timeActual.forEach(changeActualTime)
            function changeActualTime(item,index) {
                item.innerHTML = `${titles[index].timeframes.weekly.current}hrs`
            }
            timeComparation.forEach(changeTimeComparation)
            function changeTimeComparation(item,index) {
                item.innerHTML = `Last ${date} - ${titles[index].timeframes.weekly.previous}hrs`
            }
        } else {
            timeActual.forEach(changeActualTime)
            function changeActualTime(item,index) {
                item.innerHTML = `${titles[index].timeframes.monthly.current}hrs`
            }

            timeComparation.forEach(changeTimeComparation)
            function changeTimeComparation(item,index) {
                item.innerHTML = `Last ${date} - ${titles[index].timeframes.monthly.previous}hrs`
            }
        }
    })
    
}

data.forEach(useData)
titleCard.forEach(changeTitle)
timeActual.forEach(changeActualTime)
timeComparation.forEach(changeTimeComparation)

function useData(item, index) {
    titles[index] = item
}
function changeTitle(item,index) {
    item.innerHTML = titles[index].title
}
function changeActualTime(item,index) {
    item.innerHTML = `${titles[index].timeframes.daily.current}hrs`
}
function changeTimeComparation(item,index) {
    item.innerHTML = `Last ${date} - ${titles[index].timeframes.daily.previous}hrs`
}

console.log(titles)



const btn = document.querySelector('.submit-btn')
// console.log(btn)
const inputvalue = document.querySelector('#grocery')
// console.log(inputvalue)
const ultag = document.createElement("ul")
// console.log(ultag)
const divtag = document.querySelector(".grocery-list")
// console.log(divtag)
divtag.append(ultag)
const ptag = document.querySelector('.alert')
const clearbtn = document.querySelector('.clear-btn')
// console.log(clearbtn)

btn.addEventListener('click',function(Event){
event.preventDefault()
    if (inputvalue.value === ""){
        displayAlert('empty list can not be added')
    }

    if(inputvalue.value != ""){
    const newli = document.createElement("li")
    ultag.append(newli)
    newli.innerText = inputvalue.value
    inputvalue.value=""
    clearbtn.style.display = "block"

    const deleteBtn = document.createElement('span')
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    deleteBtn.style.color = "red"

    const editbtn = document.createElement('span')
    editbtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
    editbtn.style.color = 'green'

    newli.append(editbtn)
    newli.append(deleteBtn)
    // console.log(deleteBtn)
        displayAlert('Item is added')
    deleteBtn.addEventListener('click',function(e){
        newli.remove()
        displayAlert("Item is removed")
    })
    

  } 
})


//this code is for clear item action

clearbtn.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('clear-btn')){
        // console.log('wel')
        ultag.style.display = "none"
        clearbtn.style.display ="none"
    }
    displayAlert("Empty value")
})

function displayAlert(content){
    ptag.innerText =content
    ptag.style.display = "block"
    ptag.classList.add("showed")
    setTimeout(function(){
        ptag.style.display = "none"
        ptag.classList.remove("showed")
    },1000)
}

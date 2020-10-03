//buttons
let image_and_video_button = document.querySelector("#button1")
let documentation_button = document.querySelector("#button2")
let design_inspiration_button = document.querySelector("#button3")
let fonts_button = document.querySelector('#button4')
let ilustrations_button = document.querySelector('#button5')
let logo_button = document.querySelector('#button6')
// button 7 here
let usefull_links_button = document.querySelector('#button8')

//containers
let image_and_video_container = document.querySelector("#image_and_video")
let documentation_container = document.querySelector("#documentation")
let design_inspiration_container = document.querySelector('#design_inspiration')
let fonts_container = document.querySelector('#fonts')
let ilustrations_container = document.querySelector('#ilustrations')
let logo_container = document.querySelector('#logo')
// container 7 here
let usefull_links_container = document.querySelector('#usefull_links')

function ResetButtons(){
    if (design_inspiration_button.style.background = "#EEB80B"){
        design_inspiration_button.style.background = "none"
        design_inspiration_container.style.visibility = "hidden"   
    }
    if (documentation_button.style.background = "#EEB80B"){
        documentation_button.style.background = "none"
        documentation_container.style.visibility = "hidden"   
    }
    if (image_and_video_button.style.background = "#EEB80B"){
        image_and_video_button.style.background = "none"
        image_and_video_container.style.visibility = "hidden"
    }
    if (fonts_button.style.background = "#EEB80B"){
        fonts_button.style.background = "none"
        fonts_container.style.visibility = "hidden"
    }
    if (ilustrations_button.style.background = "#EEB80B"){
        ilustrations_button.style.background = "none"
        ilustrations_container.style.visibility = "hidden"
    }
    if (logo_button.style.background = "#EEB80B"){
        logo_button.style.background = "none"
        logo_container.style.visibility = "hidden"
    }
    if (usefull_links_button.style.background = "#EEB80B"){
        usefull_links_button.style.background = "none"
        usefull_links_container.style.visibility = "hidden"
    }
}
function showImageAndVideo(){
    ResetButtons()
    if (image_and_video_container.style.visibility === "hidden"){
        image_and_video_container.style.visibility = "visible"
        image_and_video_button.style.background = "#EEB80B"
    } 
}
function showDocumentation(){
    ResetButtons()
    if (documentation_container.style.visibility === "hidden"){
        documentation_container.style.visibility = "visible"
        documentation_button.style.background = "#EEB80B"
    }
}
function showDesignInspiration(){
    ResetButtons()
    if (design_inspiration_container.style.visibility === "hidden"){
        design_inspiration_container.style.visibility = "visible"
        design_inspiration_button.style.background = "#EEB80B"
    } 
}
function showFonts(){
    ResetButtons()
    if (fonts_container.style.visibility === "hidden"){
        fonts_container.style.visibility = "visible"
        fonts_button.style.background = "#EEB80B"
    } 
}
function showIlustrations(){
    ResetButtons()
    if (ilustrations_container.style.visibility === 'hidden'){
        ilustrations_container.style.visibility = 'visible'
        ilustrations_button.style.background = '#EEB80B'
    } 
}
function showLogo(){
    ResetButtons()
    if (logo_container.style.visibility === 'hidden'){
       logo_container.style.visibility = 'visible'
       logo_button.style.background = '#EEB80B'
    } 
}
//function 7 here
function showUsefullLinks(){
    ResetButtons()
    if (usefull_links_container.style.visibility === 'hidden'){
        usefull_links_container.style.visibility = 'visible'
        usefull_links_button.style.background = '#EEB80B'
     }
}    


const task = document.querySelector("#text");
const linkTool = document.querySelector("#link");
const add = document.querySelector("#add");
var list = document.querySelector("#list");

var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var links = JSON.parse(localStorage.getItem('links')) || [];



 

// add a task
add.onclick = function () {
   
    var text = task.value
    var link = linkTool.value

    if (text == '') {
        alert('Please, write a task!')
    } else {
        tasks.push(text)
        links.push(link)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('links', JSON.stringify(links))
        
        task.value = ''
        linkTool.value = ''
        
        // add a task to the list
        list.innerHTML +=   `<li>
                                <a href=${link} target="_blank">${text}</a>    
                                <i id="" class="fa fa-trash delete"></i> 
                            </li>`
    }
    

};


function showTasks(){
    tasks.forEach(function (element, index) {
        let i = 0
        var link = JSON.parse(localStorage.getItem('links')) || [];

        list.innerHTML +=   `<li>
                                <a href=${link[i]} target="_blank">${element}</a>    
                                <i id="" class="fa fa-trash delete"></i> 
                            </li>`

        i = i + 1
    });
}
showTasks()
// delete a task
list.addEventListener('click', deletetask)

function deletetask(ev) {
    if (ev.target.classList.contains('delete')) {
        ev.target.parentElement.remove()
        var id = this.getAttribute('id')
        tasks.splice(id, 1)

        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('links', JSON.stringify(links))
    }
}



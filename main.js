//buttons
let image_and_video_button = document.querySelector("#button1")
let documentation_button = document.querySelector("#button2")
let design_inspiration_button = document.querySelector("#button3")
let fonts_button = document.querySelector("#button4")
let ilustrations_button = document.querySelector('#button5')
let logo__button = document.querySelector("#button6")
let front_and_back__button = document.querySelector("#button7")
let usefull_links_button = document.querySelector("#button8")

//containers
let image_and_video__container = document.querySelector("#image_and_video")
let documentation__container = document.querySelector("#documentation")
let design_inspiration__container = document.querySelector("#design_inspiration")
let fonts__container = document.querySelector("#font")
let ilustrations__container = document.querySelector("#illustration")
let logo__container = document.querySelector("#logo")
let front_and_back__container = document.querySelector('#front_and_back')
let usefull_links__container = document.querySelector('#usefull_link')

function ResetButtons(){
    if (design_inspiration_button.style.background = "#EEB80B"){
        design_inspiration_button.style.background = "none"
        design_inspiration__container.style.visibility = "hidden"   
    }
    if (documentation_button.style.background = "#EEB80B"){
        documentation_button.style.background = "none"
        documentation__container.style.visibility = "hidden"   
    }
    if (image_and_video_button.style.background = "#EEB80B"){
        image_and_video_button.style.background = "none"
        image_and_video__container.style.visibility = "hidden"
    }
    if (fonts_button.style.background = "#EEB80B"){
        fonts_button.style.background = "none"
        fonts__container.style.visibility = "hidden"
    }
    if (ilustrations_button.style.background = "#EEB80B"){
        ilustrations_button.style.background = "none"
        ilustrations__container.style.visibility = "hidden"
    }
    if (logo__button.style.background = "#EEB80B"){
        logo__button.style.background = "none"
        logo__container.style.visibility = "hidden"
    }
    if (front_and_back__button.style.background = "#EEB80B"){
        front_and_back__button.style.background = "none"
        front_and_back__container.style.visibility = "hidden"
    }
    if (usefull_links_button.style.background = "#EEB80B"){
        usefull_links_button.style.background = "none"
        usefull_links__container.style.visibility = "hidden"
    }
}
function showImageAndVideo(){
    ResetButtons()
    if (image_and_video__container.style.visibility === "hidden"){
        image_and_video__container.style.visibility = "visible"
        image_and_video_button.style.background = "#EEB80B"
    } 
}
function showDocumentation(){
    ResetButtons()
    if (documentation__container.style.visibility === "hidden"){
        documentation__container.style.visibility = "visible"
        documentation_button.style.background = "#EEB80B"
    }
}
function showDesignInspiration(){
    ResetButtons()
    if (design_inspiration__container.style.visibility === "hidden"){
        design_inspiration__container.style.visibility = "visible"
        design_inspiration_button.style.background = "#EEB80B"
    } 
}
function showFonts(){
    ResetButtons()
    if (fonts__container.style.visibility === "hidden"){
        fonts__container.style.visibility = "visible"
        fonts_button.style.background = "#EEB80B"
    } 
}
function showIllustrations(){
    ResetButtons()
    if (ilustrations__container.style.visibility === 'hidden'){
        ilustrations__container.style.visibility = 'visible'
        ilustrations_button.style.background = '#EEB80B'
    } 
}
function showLogo(){
    ResetButtons()
    if (logo__container.style.visibility === 'hidden'){
       logo__container.style.visibility = 'visible'
       logo__button.style.background = '#EEB80B'
    } 
}
function showFrontAndBack(){
    ResetButtons()
    if (front_and_back__container.style.visibility === 'hidden'){
       front_and_back__container.style.visibility = 'visible'
       front_and_back__button.style.background = '#EEB80B'
    } 
}
function showUsefullLinks(){
    ResetButtons()
    if (usefull_links__container.style.visibility === 'hidden'){
        usefull_links__container.style.visibility = 'visible'
        usefull_links_button.style.background = '#EEB80B'
     }
}    





function imageAndVideo__saveAndShowTools(){
    let image_and_video__text = document.querySelector("#image_and_video--text");
    let image_and_video__link = document.querySelector("#image_and_video--link");
    let image_and_video__add = document.querySelector("#image_and_video--add");
    let image_and_video__list = document.querySelector("#image_and_video--list");

    let image_and_video__text_array = JSON.parse(localStorage.getItem('image_and_video__text_array')) || [];
    let image_and_video__link_array = JSON.parse(localStorage.getItem('image_and_video__link_array')) || [];
 
    // add a tool
    image_and_video__add.onclick = function() {
    
        var text = image_and_video__text.value
        var link = image_and_video__link.value

        if ((text == "") || (link == "")) {
            alert('Please, fill in two fields!')
        } else{
            image_and_video__text_array.push(text)
            image_and_video__link_array.push(link)

            localStorage.setItem('image_and_video__text_array', JSON.stringify(image_and_video__text_array))
            localStorage.setItem('image_and_video__link_array', JSON.stringify(image_and_video__link_array))
     

            image_and_video__text.value = ''
            image_and_video__link.value = ''

            // add a tool to the list
            image_and_video__list.innerHTML +=   `<li>
                                                    <a href=${link} target="_blank">${text}</a>    
                                                    <i class="fa fa-trash delete"></i> 
                                                        </li>`                                
        }
        
    };

    function imageAndVideo__showTools(){
        image_and_video__text_array.forEach(function (element, i) {


            var link = JSON.parse(localStorage.getItem('image_and_video__link_array')) || [];
            image_and_video__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
           i = i++
        });
    }
    imageAndVideo__showTools()

    // delete a tool
    
    image_and_video__list.addEventListener('click', deleteTool)
    
    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            image_and_video__text_array.splice(id, 1)
            image_and_video__link_array.splice(id, 1)
            localStorage.setItem('image_and_video__text_array', JSON.stringify(image_and_video__text_array))
            localStorage.setItem('image_and_video__link_array', JSON.stringify(image_and_video__link_array))
          
        }
       
    }
}    


function documentation__saveAndShowTools(){

    let documentation__text = document.querySelector("#documentation--text");
    let documentation__link = document.querySelector("#documentation--link");
    let documentation__add = document.querySelector("#documentation--add");
    let documentation__list = document.querySelector("#documentation--list");

    let documentation__text_array = JSON.parse(localStorage.getItem('documentation__text_array')) || [];
    let documentation__link_array = JSON.parse(localStorage.getItem('documentation__link_array')) || [];


    // add a tool
    documentation__add.onclick = function () {
    
        var text = documentation__text.value
        var link = documentation__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            documentation__text_array.push(text)
            documentation__link_array.push(link)
            localStorage.setItem('documentation__text_array', JSON.stringify(documentation__text_array))
            localStorage.setItem('documentation__link_array', JSON.stringify(documentation__link_array))
            
            documentation__text.value = ''
            documentation__link.value = ''
            
            // add a tool to the list
            documentation__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
    };

    function documentation__showTools(){
        documentation__text_array.forEach(function (element, i) {

            var link = JSON.parse(localStorage.getItem('documentation__link_array')) || [];
            documentation__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i = i + 1
        });
    }
    documentation__showTools()

    // delete a tool
    documentation__list.addEventListener('click', deleteTool)

    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            documentation__text_array.splice(id, 1)
            documentation__link_array.splice(id, 1)
            localStorage.setItem('documentation__text_array', JSON.stringify(documentation__text_array))
            localStorage.setItem('documentation__link_array', JSON.stringify(documentation__link_array))
        }
    }
}

function design__saveAndShowTools(){

    let design__text = document.querySelector("#design--text");
    let design__link = document.querySelector("#design--link");
    let design__add = document.querySelector("#design--add");
    let design__list = document.querySelector("#design--list");

    let design__text_array = JSON.parse(localStorage.getItem('design__text_array')) || [];
    let design__link_array = JSON.parse(localStorage.getItem('design__link_array')) || [];


    // add a tool
    design__add.onclick = function () {
    
        var text = design__text.value
        var link = design__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            design__text_array.push(text)
            design__link_array.push(link)
            localStorage.setItem('design__text_array', JSON.stringify(design__text_array))
            localStorage.setItem('design__link_array', JSON.stringify(design__link_array))
            
            design__text.value = ''
            design__link.value = ''
            
            // add a tool to the list
            design__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function design__showTools(){
        design__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('design__link_array')) || [];
            design__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i++
        });
    }
    design__showTools()

    // delete a tool
    design__list.addEventListener('click', deleteTool)

    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            design__text_array.splice(id, 1)
            design__link_array.splice(id, 1)
            localStorage.setItem('design__text_array', JSON.stringify(design__text_array))
            localStorage.setItem('design__link_array', JSON.stringify(design__link_array))
        }
    }
}

function font__saveAndShowTools(){

    let font__text = document.querySelector("#font--text");
    let font__link = document.querySelector("#font--link");
    let font__add = document.querySelector("#font--add");
    let font__list = document.querySelector("#font--list");

    let font__text_array = JSON.parse(localStorage.getItem('font__text_array')) || [];
    let font__link_array = JSON.parse(localStorage.getItem('font__link_array')) || [];


    // add a tool
    font__add.onclick = function () {
    
        var text = font__text.value
        var link = font__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            font__text_array.push(text)
            font__link_array.push(link)
            localStorage.setItem('font__text_array', JSON.stringify(font__text_array))
            localStorage.setItem('font__link_array', JSON.stringify(font__link_array))
            
            font__text.value = ''
            font__link.value = ''
            
            // add a tool to the list
            font__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function font__showTools(){
        font__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('font__link_array')) || [];
            font__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i = i++
        });
    }
    font__showTools()

    // delete a tool
    font__list.addEventListener('click', deleteTool)

    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            font__text_array.splice(id, 1)
            font__link_array.splice(id, 1)
            localStorage.setItem('font__text_array', JSON.stringify(font__text_array))
            localStorage.setItem('font__link_array', JSON.stringify(font__link_array))
        }
    }
}

function illustration__saveAndShowTools(){

    let illustration__text = document.querySelector("#illustration--text");
    let illustration__link = document.querySelector("#illustration--link");
    let illustration__add = document.querySelector("#illustration--add");
    let illustration__list = document.querySelector("#illustration--list");

    let illustration__text_array = JSON.parse(localStorage.getItem('illustration__text_array')) || [];
    let illustration__link_array = JSON.parse(localStorage.getItem('illustration__link_array')) || [];


    // add a tool
    illustration__add.onclick = function () {
    
        var text = illustration__text.value
        var link = illustration__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            illustration__text_array.push(text)
            illustration__link_array.push(link)
            localStorage.setItem('illustration__text_array', JSON.stringify(illustration__text_array))
            localStorage.setItem('illustration__link_array', JSON.stringify(illustration__link_array))
            
            illustration__text.value = ''
            illustration__link.value = ''
            
            // add a tool to the list
            illustration__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function illustration__showTools(){
        illustration__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('illustration__link_array')) || [];
            illustration__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i++
        });
    }
    illustration__showTools()

    // delete a tool
    illustration__list.addEventListener('click', deleteTool)

    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            illustration__text_array.splice(id, 1)
            illustration__link_array.splice(id, 1)
            localStorage.setItem('illustration__text_array', JSON.stringify(illustration__text_array))
            localStorage.setItem('illustration__link_array', JSON.stringify(illustration__link_array))
        }
    }
}

function logo__saveAndShowTools(){

    let logo__text = document.querySelector("#logo--text");
    let logo__link = document.querySelector("#logo--link");
    let logo__add = document.querySelector("#logo--add");
    let logo__list = document.querySelector("#logo--list");

    let logo__text_array = JSON.parse(localStorage.getItem('logo__text_array')) || [];
    let logo__link_array = JSON.parse(localStorage.getItem('logo__link_array')) || [];


    // add a tool
    logo__add.onclick = function () {
    
        var text = logo__text.value
        var link = logo__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            logo__text_array.push(text)
            logo__link_array.push(link)
            localStorage.setItem('logo__text_array', JSON.stringify(logo__text_array))
            localStorage.setItem('logo__link_array', JSON.stringify(logo__link_array))
            
            logo__text.value = ''
            logo__link.value = ''
            
            // add a tool to the list
            logo__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function logo__showTools(){
        logo__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('logo__link_array')) || [];
            logo__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i++
        });
    }
    logo__showTools()

    // delete a tool
    logo__list.addEventListener('click', deletetask)

    function deletetask(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            logo__text_array.splice(id, 1)
            logo__link_array.splice(id, 1)
            localStorage.setItem('logo__text_array', JSON.stringify(logo__text_array))
            localStorage.setItem('logo__link_array', JSON.stringify(logo__link_array))
        }
    }
}
function front_and_back__saveAndShowTools(){

    let front_and_back__text = document.querySelector("#front_and_back--text");
    let front_and_back__link = document.querySelector("#front_and_back--link");
    let front_and_back__add = document.querySelector("#front_and_back--add");
    let front_and_back__list = document.querySelector("#front_and_back--list");

    let front_and_back__text_array = JSON.parse(localStorage.getItem('front_and_back__text_array')) || [];
    let front_and_back__link_array = JSON.parse(localStorage.getItem('front_and_back__link_array')) || [];


    // add a tool
    front_and_back__add.onclick = function () {
    
        var text = front_and_back__text.value
        var link = front_and_back__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            front_and_back__text_array.push(text)
            front_and_back__link_array.push(link)
            localStorage.setItem('front_and_back__text_array', JSON.stringify(front_and_back__text_array))
            localStorage.setItem('front_and_back__link_array', JSON.stringify(front_and_back__link_array))
            
            front_and_back__text.value = ''
            front_and_back__link.value = ''
            
            // add a tool to the list
            front_and_back__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function front_and_back__showTools(){
        front_and_back__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('front_and_back__link_array')) || [];
            front_and_back__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i++
        });
    }
    front_and_back__showTools()

    // delete a tool
    front_and_back__list.addEventListener('click', deleteTool)

    function deleteTool(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            let id = ev.target.getAttribute('id')

            front_and_back__text_array.splice(id, 1)
            front_and_back__link_array.splice(id, 1)
            localStorage.setItem('front_and_back__text_array', JSON.stringify(front_and_back__text_array))
            localStorage.setItem('front_and_back__link_array', JSON.stringify(front_and_back__link_array))
        }
    }
}
function usefull_link__saveAndShowTools(){

    let usefull_link__text = document.querySelector("#usefull_link--text");
    let usefull_link__link = document.querySelector("#usefull_link--link");
    let usefull_link__add = document.querySelector("#usefull_link--add");
    let usefull_link__list = document.querySelector("#usefull_link--list");

    let usefull_link__text_array = JSON.parse(localStorage.getItem('usefull_link__text_array')) || [];
    let usefull_link__link_array = JSON.parse(localStorage.getItem('usefull_link__link_array')) || [];


    // add a tool
    usefull_link__add.onclick = function () {
    
        var text = usefull_link__text.value
        var link = usefull_link__link.value

        if ((text == '') || (link == '')) {
            alert('Please, fill in two fields!')
        } else {
            // saving in local storage
            usefull_link__text_array.push(text)
            usefull_link__link_array.push(link)
            localStorage.setItem('usefull_link__text_array', JSON.stringify(usefull_link__text_array))
            localStorage.setItem('usefull_link__link_array', JSON.stringify(usefull_link__link_array))
            
            usefull_link__text.value = ''
            usefull_link__link.value = ''
            
            // add a tool to the list
            usefull_link__list.innerHTML +=   `<li>
                                    <a href=${link} target="_blank">${text}</a>    
                                    <i id="" class="fa fa-trash delete"></i> 
                                </li>`
        }
        

    };

    function usefull_link__showTools(){
        usefull_link__text_array.forEach(function (element, i) {
            var link = JSON.parse(localStorage.getItem('usefull_link__link_array')) || [];
            usefull_link__list.innerHTML +=   `<li>
                                    <a href=${link[i]} target="_blank">${element}</a>    
                                    <i id=${i} class="fa fa-trash delete"></i> 
                                </li>`
            i++
        });
    }
    usefull_link__showTools()

    // delete a tool
    usefull_link__list.addEventListener('click', deletetask)

    function deletetask(ev) {
        if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove()
            id = ev.target.getAttribute('id')

            usefull_link__text_array.splice(id, 1)
            usefull_link__link_array.splice(id, 1)
            localStorage.setItem('usefull_link__text_array', JSON.stringify(usefull_link__text_array))
            localStorage.setItem('usefull_link__link_array', JSON.stringify(usefull_link__link_array))
        }
    }
}

imageAndVideo__saveAndShowTools()
documentation__saveAndShowTools()
design__saveAndShowTools()
font__saveAndShowTools()
illustration__saveAndShowTools()
logo__saveAndShowTools()
front_and_back__saveAndShowTools()
usefull_link__saveAndShowTools()
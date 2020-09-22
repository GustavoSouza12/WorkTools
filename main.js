function showImageAndVideo(){
    let image_and_video_container = document.querySelector("#image_and_video")
    let image_and_video_button = document.querySelector("#button1")

    let documentation_container = document.querySelector("#documentation")
    let documentation_button = document.querySelector("#button2")

    if (image_and_video_container.style.visibility === "hidden"){
        image_and_video_container.style.visibility = "visible"
        image_and_video_button.style.background = "pink"
    } else{
        image_and_video.style.visibility = "hidden"
        image_and_video_button.style.background = "none"
    }  

    if (documentation_button.style.background = "pink"){
        documentation_button.style.background = "none"
        documentation_container.style.visibility = "hidden"
    }

}
function showDocumentation(){
    let documentation_container = document.querySelector("#documentation")
    let button_documentation = document.querySelector("#button2")

    let image_and_video_container = document.querySelector("#imageAndVideo")
    let image_and_video_button = document.querySelector("#button1")


    if (documentation.style.visibility === "hidden"){
        documentation.style.visibility = "visible"
        button_documentation.style.background = "pink"
    } else{
        documentation_container.style.visibility = "hidden"
        button_documentation.style.background = "none"
      
       
    }  
    if (image_and_video_button.style.background = "pink"){
        image_and_video_button.style.background = "none"
        image_and_video_container.style.visibility = "hidden"
    }

}

const image_and_video_text = document.querySelector("#text");
const image_and_video_add = document.querySelector("#add");
const image_and_video_list = document.querySelector("#list")
const image_and_video_link = document.querySelector("#link")
const local_storage_text_array = JSON.parse(localStorage.getItem('local_storage_text_array')) || []
const local_storage_link_array = JSON.parse(localStorage.getItem('local_storage_link_array')) || []

image_and_video_add.onclick = function () {

    var text = image_and_video_text.value
    var link = image_and_video_link.value
    if (text == '') {
            alert('Please, write a task!');
        } else {
            
            local_storage_text_array.push(text)
            local_storage_link_array.push(link)
         
            localStorage.setItem('local_storage_text_array', JSON.stringify(local_storage_text_array))
            localStorage.setItem('local_storage_link_array', JSON.stringify(local_storage_link_array))

            image_and_video_list.innerHTML += `<li><a href=${link} target="_blank">${text}</a><i class="fa fa-trash delete" ></i></li>`

            image_and_video_text.value = ''
            image_and_video_link.value = ''
        }


};

function showTasks(){
    let i = 0
    local_storage_text_array.forEach(function (element) {

        let links = JSON.parse(localStorage.getItem('local_storage_link_array')) || []

        image_and_video_list.innerHTML += `<li><a href=${links[i]} target="_blank">${element}</a><i class="fa fa-trash delete" ></i></li>`

       i += 1
    });
}

showTasks()
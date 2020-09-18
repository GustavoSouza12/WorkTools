function showImageAndVideo(){
    let imageAndVideo = document.querySelector("#imageAndVideo")
    let button = document.querySelector("#button1")

    if (imageAndVideo.style.visibility === "hidden"){
        imageAndVideo.style.visibility = "visible"
        button.style.background = "blue"
    } else{
        imageAndVideo.style.visibility = "hidden"
        button.style.background = "none"
    }  
}
function showDocumentation(){
    let documentation = document.querySelector("#documentation")
    let button = document.querySelector("#button2")
    let div = document.querySelector(".button")


    if (documentation.style.visibility === "hidden"){
        documentation.style.visibility = "visible"
        button.style.background = "blue"
    } else{
        documentation.style.visibility = "hidden"
        button.style.background = "none"
    }  

  
}
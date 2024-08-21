var MainDiv = document.getElementById("projects");
var but = document.getElementById("button-show");
var count =  0;

but.onclick = function(){
    
    if(count === 0 ){
        MainDiv.style.display = "block"; 
        count = count+1;
        }
        else{
            MainDiv.style.display = "none";
            count = count - 1;
        }
    }
for(var i = 0 ; i< PROJECTS.length ;i++){


    //div
    var divProject = document.createElement("div");
    var divStyle = document.createAttribute("style");
    divStyle.value = "display : inline-block ; width : 300px ; margin : 10px 20px";
    divProject.setAttributeNode(divStyle);
    
    //title
    var title = document.createElement("h3");
    var titleText = document.createTextNode(PROJECTS[i].title);
    title.appendChild(titleText);


    //image
    var imgProject = document.createElement("img");
    var imgsrc = document.createAttribute("src");
    imgsrc.value = "./image/"+PROJECTS[i].img;
    imgProject.setAttributeNode(imgsrc);
    var imgStyle = document.createAttribute("style");
    imgStyle.value = " width:300px ; height : 200px ";
    imgProject.setAttributeNode(imgStyle);
    

    //description
    var p  = document.createElement("p");
    var pText = document.createTextNode(PROJECTS[i].description);
    p.appendChild(pText);

    divProject.appendChild(title);
    divProject.appendChild(imgProject);
    divProject.appendChild(p);

    MainDiv.appendChild(divProject);



}
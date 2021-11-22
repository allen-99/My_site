

fetch('helpMe.json').then(response => {
    response.json().then(result => {
        let img1 = new Image();
        img1.src = result.picture1;
        let img2 = new Image();
        img2.src = result.picture2;
        let img3 = new Image();
        img3.src = result.picture3;
        img1.style.height = "25%"; img1.style.width = "25%";
        img2.style.height = "25%"; img2.style.width = "25%";
        img3.style.height = "25%"; img3.style.width = "25%";
        img1.style.margin = "10px";
        img2.style.margin = "10px";
        img3.style.margin = "10px";
        document.getElementById("grid").append(img1);
        document.getElementById("grid").append(img2);
        document.getElementById("grid").append(img3);
    })
})


function convert(){
    const link = document.getElementById("driveLink").value;
    const output = document.getElementById("directUrl");
    const preview = document.getElementById("preview");

    if(!link.includes("drive.google.com")){
        output.value = "Invalid Google Drive link!";
        return;
    }

    let fileId = "";

    if(link.includes("id=")){
        fileId = link.split("id=")[1].split("&")[0];
    } else if(link.includes("/d/")){
        fileId = link.split("/d/")[1].split("/")[0];
    }

    if(!fileId){
        output.value = "Could not extract File ID!";
        return;
    }

    const direct = `https://drive.google.com/uc?export=view&id=${fileId}`;
    output.value = direct;

    preview.src = direct;
    preview.style.display = "block";
}

function copyURL(){
    const urlBox = document.getElementById("directUrl");
    urlBox.select();
    document.execCommand("copy");
    alert("URL Copied!");
}
let index = 1;
let path = "images/footballs/footballs";

function display(type) {
    var img = document.getElementById("big-pic");
    img.src = "images/" + type + "/" + type + " (1).jpg";

    if (type == "footballs") {
        path = "images/footballs/footballs";
    }

    else if (type == "shinpads") {
        path = "images/shinpads/shinpads"
    }

    else if (type == "shoes") {
        path = "images/shoes/shoes";
    }

    else if (type == "shirts") {
        path = "images/shirts/shirts";
    }

    else if (type == "socks") {
        path = "images/socks/socks";
    }

    else if (type == "shorts") {
        path = "images/shorts/shorts";
    }

}

setInterval(() => {
    index = parseInt(index);
    index = index % 4;
    index += 1;

    var img = document.getElementById("big-pic");
    img.src = path + ' (' + index + ').jpg';
}, 2000);


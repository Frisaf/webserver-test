function clean() {
    const url = new URL(window.location);
    
    url.searchParams.set("message", "Thank you! Now it's clean again!");
    url.searchParams.set("cleaned", "true")
    window.location = url;
}

function show_trash_images() {
    const url_params = new URLSearchParams(window.location.search);

    if(url_params.get("cleaned") === "true") {
        document.getElementById("trashimg").style.display = "none";
        document.getElementById("trashMessage").style.display = "none";
        document.getElementById("cleanbtn").style.display = "none";
    };
};

window.onload = function() {
    show_trash_images();
};
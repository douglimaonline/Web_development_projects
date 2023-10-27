const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", function () {
        if (drum.getAttribute("class".slice(0,1) === "w")) {
            alert("w clicked.");
        }
    })
});
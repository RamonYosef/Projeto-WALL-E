let time = 5000,
    currentImageIdex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

    function nextImage(){

        images[currentImageIdex].classList.remove("selecte")


        currentImageIdex++

        if(currentImageIdex >= max)
        currentImageIdex = 0
        images[currentImageIdex].classList.add("selecte")
    }



    function start(){
       setInterval(() => {
        nextImage()
       }, time)
    }

    window.addEventListener("load", start)

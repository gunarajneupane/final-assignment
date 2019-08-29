var index = 0;
showSlides();

function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i <dots.length; i++)
    {
        dots[i].className = dots[i].className.replace("dots-active", "")
    }
    index++;
    if(index<1){
        index = slides.length;
    }
    if(index>slides.length){
        index = 1;
    }

    slides[index - 1].style.display = 'block';
    dots[index - 1].className += " dots-active";

    setTimeout(showSlides, 5000);
}

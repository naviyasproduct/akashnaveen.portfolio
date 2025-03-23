const aboutMe = document.querySelector("#about-me");

aboutMe.innerHTML = aboutMe.textContent
    .split(" ")
    .map(word => `<span>${word}</span>`)
    .join(" ");


document.querySelectorAll("#about-me span").forEach( span =>{
    span.addEventListener("mouseover", ()=>{
        span.style.color = "#ffcc00"; // Glowing effect
        span.style.textShadow = "0px 0px 10pxrgb(255, 255, 255)"; // Glowing text shadow
        span.style.transform = "scale(1.5)"; // Grow the word slightly
    });
    span.addEventListener("mouseout",()=>{
        span.style.color = ""; // Reset color
        span.style.textShadow = ""; // Reset text shadow
        span.style.transform = "scale(1)"; // Reset word size
    });


});


const aboutMeH1 = document.querySelector("#about-me-h1");

aboutMeH1.innerHTML = aboutMeH1.textContent
    .split(" ")
    .map(word => `<span>${word}</span>`)
    .join(" ");


    document.querySelectorAll("#about-me-h1 span").forEach( span =>{
        span.addEventListener("mouseover", ()=>{
            span.style.color = "#ffcc00"; // Glowing effect
            span.style.textShadow = "0px 0px 10pxrgb(255, 255, 255)"; // Glowing text shadow
            span.style.transform = "scale(1.5)"; // Grow the word slightly
        });
        span.addEventListener("mouseout",()=>{
            span.style.color = ""; // Reset color
            span.style.textShadow = ""; // Reset text shadow
            span.style.transform = "scale(1)"; // Reset word size
        });
    
    
    });
    
















let links = document.querySelectorAll(".linkItem")

links.forEach(link=>{

    link.addEventListener("click", e =>{
        const activeLink = document.querySelector(".active")

        if(activeLink && activeLink !== link){
            activeLink.classList.toggle("active");
            link.classList.toggle("active");
        }

        
            
        
        
    })
})

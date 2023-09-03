let navItems = document.querySelectorAll("a");

for(let i = 0; i < navItems.length; i++){
    navItems[i].selected = false;
    navItems[i].addEventListener("click", function(){
        if(this.selected === false){
            for(let i = 0; i < navItems.length; i++){
                if(navItems[i].selected = true){
                    navItems[i].selected = false;
                    navItems[i].classList.remove("select");
                }
            }
            this.classList.add("select");
            this.selected = true;
        }
    })
};
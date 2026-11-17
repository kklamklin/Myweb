const navbarMenu = document.querySelector("#navbar_menu_svg")
const navbar = document.querySelector("#navbar")
const wel_box = document.querySelector("#wel_box")
const wel_box_wel_txt = document.querySelector("#wel_txt")
let is_click_menu_bar = false

console.log("click!")

ran_word_in = [
            "Yeah, just click me already",
            "JUST CLICK ALREADY!!!",
            "BAKA!",]

ran_word_out = [
            "Hmphhh! I'm not like your either",
            "Just click me BAKA!",
            "Huh! why are not click me",
            "just go away Hmph!",
            "GO AWAYYY!"]


navbarMenu.addEventListener("click", ()=>{
    if (!is_click_menu_bar){
        is_click_menu_bar = true
    }
    else{
        is_click_menu_bar = false
    }
    console.log(is_click_menu_bar)
    let menu_bar = document.querySelector("#menu_bar")
    if (is_click_menu_bar){
        menu_bar.classList.add("menu_bar_open")
    }
    else{
        menu_bar.classList.remove("menu_bar_open")
    }
}
)       

wel_box.addEventListener("mouseenter",() => {
    wel_box_wel_txt.textContent = ran_word_in[Math.floor(Math.random()*ran_word_in.length)]
})
wel_box.addEventListener("mouseleave",() => {
    wel_box_wel_txt.textContent = ran_word_out[Math.floor(Math.random()*ran_word_out.length)]
})
wel_box.addEventListener("click",() => {
    wel_box_wel_txt.textContent = "yeppeeee!"
})
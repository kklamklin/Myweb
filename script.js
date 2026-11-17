const navbarMenu = document.querySelector("#navbar_menu_svg")
const navbar = document.querySelector("#navbar")
const wel_box = document.querySelector("#wel_box")
const wel_box_wel_txt = document.querySelector("#wel_txt")
const cerNone = "(Put mouse there to watch more)...."
let cer1 = document.querySelector("#cer1")
let cer2 = document.querySelector("#cer2")
let cer3 = document.querySelector("#cer3")
let cer4 = document.querySelector("#cer4")
let cer1_txt = document.querySelector("#cer1_txt")
let cer2_txt = document.querySelector("#cer2_txt")
let cer3_txt = document.querySelector("#cer3_txt")
let cer4_txt = document.querySelector("#cer4_txt")
let is_click_menu_bar = false
fetch("data.json")
  .then((response) => {
    console.log(response); 
    return response.text()})
  .then((text) => {
    const data = JSON.parse(text);


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

cer1.addEventListener("mouseenter",() =>{
    cer1_txt.textContent = data.cer1
    cer1_txt.classList.add("textHighlight")
})
cer1.addEventListener("mouseleave",() =>{
    cer1_txt.textContent = cerNone
    cer1_txt.classList.remove("textHighlight")
});

cer2.addEventListener("mouseenter",() =>{
    cer2_txt.textContent = data.cer2
    cer2_txt.classList.add("textHighlight")
})
cer2.addEventListener("mouseleave",() =>{
    cer2_txt.textContent = cerNone
    cer2_txt.classList.remove("textHighlight")
});

cer3.addEventListener("mouseenter",() =>{
    cer3_txt.textContent = data.cer3
    cer3_txt.classList.add("textHighlight")
})
cer3.addEventListener("mouseleave",() =>{
    cer3_txt.textContent = cerNone
    cer3_txt.classList.remove("textHighlight")
});

cer4.addEventListener("mouseenter",() =>{
    cer4_txt.textContent = data.cer4
    cer4_txt.classList.add("textHighlight")
})
cer4.addEventListener("mouseleave",() =>{
    cer4_txt.textContent = cerNone
    cer4_txt.classList.remove("textHighlight")
});

});
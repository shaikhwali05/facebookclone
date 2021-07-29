var settingMenu = document.querySelector(".settings-menu");
var btn = document.getElementById("darkbtn")
function settingMenuToggle(){
    settingMenu.classList.toggle("settings-menu-height")

}
btn.onclick = function(){
    btn.classList.toggle("darkbtn-on");
    document.body.classList.toggle("darktheme")
}
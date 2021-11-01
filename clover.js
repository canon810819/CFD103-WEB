const newest_pic = document.querySelector(".newest_pic");
const knowledge_logo = document.querySelector(".knowledge_logo");
window.addEventListener("scroll", function(){
    newest_pic.style["transform"] = `rotate(${scrollY / 10}deg)`;
    knowledge_logo.style["transform"] = `rotate(${scrollY / 10}deg)`;
});

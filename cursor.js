// CURSOR SCRIPT
window.addEventListener( "mousemove", e=>{
    let cursor=document.getElementById("cursor");
    cursor.style.top=`${e.clientY}px`;
    cursor.style.left=`${e.clientX}px`;

    // using ternary operators for my conditional statement 
    (e.target.id==="nav-active")? (cursor.classList.add("nav-cursor-active")) : (cursor.classList.remove("nav-cursor-active"));
    (e.target.id==="h1-box-active")? ((cursor.classList.add("h1-box-mouse-active"))) : (cursor.classList.remove("h1-box-mouse-active"));
});
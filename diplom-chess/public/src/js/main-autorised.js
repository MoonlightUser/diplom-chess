document.getElementById('logot').addEventListener("click", ()=>{
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
})
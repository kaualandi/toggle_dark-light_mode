document.querySelector("#container-toggle-theme").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("on");
    document.querySelector(".moon-logo").classList.toggle("on");
    if (document.querySelector(".dark")) {
        document.querySelector("html").classList.toggle("dark");
        salvarTema("light");
    } else {
        document.querySelector("html").classList.toggle("dark");
        salvarTema("dark");
    }
})
if (localStorage.theme == "dark") {
    document.querySelector('html').classList.add('dark');
    document.querySelector(".sun-logo").classList.toggle("on");
    document.querySelector(".moon-logo").classList.toggle("on");
}
function salvarTema(theme) {
    localStorage.setItem('theme', theme);
}
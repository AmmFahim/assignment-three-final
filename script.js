// Dark Mode Auto Detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

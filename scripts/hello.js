function hello() {
    const webpage = document.body.innerHTML;
    console.log("hello world!");
    console.log(webpage);
}

window.onload = () => {
    console.log("loaded!");
    hello();
};

hello();
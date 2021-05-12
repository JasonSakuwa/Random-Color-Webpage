randomColor = () => {
    if (document.querySelector("#alpha").checked) {
        const r = Math.floor(Math.random() * 255 + 1);
        const g = Math.floor(Math.random() * 255 + 1);
        const b = Math.floor(Math.random() * 255 + 1);
        const a = Math.floor(Math.random() * 1000) / 1000;
        document.querySelector("body").style.backgroundColor = "rgb(".concat(r, ",", g, ",", b, ",", a, ")");    
    } else {
        const r = Math.floor(Math.random() * 255 + 1);
        const g = Math.floor(Math.random() * 255 + 1);
        const b = Math.floor(Math.random() * 255 + 1);
        document.querySelector("body").style.backgroundColor = "rgb(".concat(r, ",", g, ",", b, ")");
    }
}
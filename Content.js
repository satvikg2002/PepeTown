let pepePhotos = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lW5Vau0QII2sDZGepFR87AHaFj%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fdm5snSDhEi6oxauMhJXj40CRZpS9sRmqEhl9dxWI5gA.png%3Fauto%3Dwebp%26s%3D8925a88901394e8d407dc42ce14ed351d59a5ac2&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.vanityfair.com%2Fphotos%2F5f5156490ca7fe28f9ec3f55%2Fmaster%2Fw_2560%252Cc_limit%2Ffeels-good-man-film.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.njGexOArviZMNgAHrarZYQHaF7%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tuwdBn0XTBuO3zZodOLRPwHaHa%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9H-UAFRO3ITGk4CaaQftdgHaEK%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAN66SAyphTlt7zyOvpiJPzFzGkKT_PUBeGovqOaaVA%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.imgur.com%2FwBtlTE0.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6PTCSSJKxEmKm0kokwO8gQHaG2%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FTsutP8d0-fkXrzmr2uj5QHaGi%26pid%3DApi&f=1"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * pepePhotos.length);
    imgs[i].src = pepePhotos[randomImg];
}
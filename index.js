const populate = (obj) => {
    console.log(obj);
}

const init = () => {
    fetchJson().then((obj) => {
        populate(obj);
    });
}

window.onload = () => {
    init();
}
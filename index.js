const populate = (obj) => {
    const wrapper = document.querySelector('#wrapper');
    console.log(obj);
    obj.forEach(cat => {
        let catHolder = document.createElement('div');
        catHolder.className += 'cat-div';
        let catName = document.createElement('h2');
        let catInfo = document.createElement('p');
        let kittenNames = [];
        cat.kittens.forEach(kitten => {
            kittenNames.push(kitten.name);
        });
        catInfo.textContent = `${cat.name} is a ${cat.color} ${cat.breed} with ${cat.kittens.length} kittens. Their names are ${kittenNames}`;
        catName.textContent = cat.name;
        catHolder.appendChild(catName);
        catHolder.appendChild(catInfo);
        wrapper.appendChild(catHolder);
    });
}

const init = () => fetchJson().then(obj => populate(obj));

window.onload = () => init();
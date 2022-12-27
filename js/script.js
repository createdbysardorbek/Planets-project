const nav = document.querySelector('.header__navigation ul');
console.log(nav);

nav.addEventListener('click', (e) => {
    if (e.target.dataset.planet) {
        fetch('planets.json').then(res => res.json()).then(data => {
            let planet = data.planets.find(elem => elem.name === e.target.dataset.planet);
            console.log(planet);
        })
    }
})
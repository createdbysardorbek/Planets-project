const nav = document.querySelector('.header__navigation ul');
function showFirstPlanet() {
    fetch('planets.json').then(res => res.json()).then(data => {
        let firstPlanet = data.planets[0];
        renderPlanet(firstPlanet)
    })
}
showFirstPlanet()

function renderPlanet(elem) {
    let main = document.querySelector('main');
    main.innerHTML = ''
    const renderHtml = `
    <div class="planets__info">
    <div class="bottom__info2">
        <article class="active">
            <span>OVERVIEW</span>
        </article>
        <article>
            <span>Internal</span>
        </article>
        <article>
            <span>Surface</span>
        </article>
    </div>
    <div class="planets__img">
        <img src=${elem.images.planet}>
    </div>
    <div class="planets__info">
        <div class="information">
            <div class="top__info">
                <h2>${elem.name}</h2>
                <p>${elem.overview.content}</p>
                <div>
                    Source: <a href=${elem.overview.source} target="_blank"> Wikipedia </a> <img src="./assets/icon-source.svg" alt="source">
                </div>
            </div>
            <div class="bottom__info">
                <article class="active">
                    <h3>01</h3>
                    <span>OVERVIEW</span>
                </article>
                <article>
                    <h3>02</h3>
                    <span>Internal Structure</span>
                </article>
                <article>
                    <h3>03</h3>
                    <span>Surface Geology</span>
                </article>
            </div>
        </div>
    </div>
</div>
<div class="planets__description">
    <article>
        <h6>ROTATION TIME</h6>
        <span>${elem.rotation}</span>
    </article>
    <article>
        <h6>Revolution TIME</h6>
        <span>${elem.revolution}</span>
    </article>
    <article>
        <h6>Radius</h6>
        <span>${elem.radius}</span>
    </article>
    <article>
        <h6>Average temp</h6>
        <span>${elem.temperature}</span>
    </article>
</div>
`
    main.innerHTML = renderHtml;

}
function showPlanet(e) {
    if (e.target.dataset.planet) {
        fetch('planets.json').then(res => res.json()).then(data => {
            let planet = data.planets.find(elem => elem.name === e.target.dataset.planet);
            renderPlanet(planet)
        })
    }
}

nav.addEventListener('click', showPlanet)
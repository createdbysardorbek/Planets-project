const nav = document.querySelector('.header__navigation ul');
console.log(nav);

nav.addEventListener('click', (e) => {
    if (e.target.dataset.planet) {
        fetch('planets.json').then(res => res.json()).then(data => {
            let planet = data.planets.find(elem => elem.name === e.target.dataset.planet);
            let main = document.querySelector('main');
            main.innerHTML = ''
            main.innerHTML = `
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
                        <img src=${planet.images.planet}>
                    </div>
                    <div class="planets__info">
                        <div class="information">
                            <div class="top__info">
                                <h2>${planet.name}</h2>
                                <p>${planet.overview.content}</p>
                                <div>
                                    Source: <span><a src=${planet.overview.source}>Wikipedia</a></span> <img src="./assets/icon-source.svg" alt="source">
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
                        <span>${planet.rotation}</span>
                    </article>
                    <article>
                        <h6>ROTATION TIME</h6>
                        <span>${planet.revolution}</span>
                    </article>
                    <article>
                        <h6>ROTATION TIME</h6>
                        <span>${planet.radius}</span>
                    </article>
                    <article>
                        <h6>ROTATION TIME</h6>
                        <span>${planet.temperature}</span>
                    </article>
                </div>
            `
        })
    }
})
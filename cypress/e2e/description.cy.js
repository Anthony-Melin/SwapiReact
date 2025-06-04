describe('description', () => {

    describe('first people', () => {
        beforeEach(() => {
            cy.visit('/people/1')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('Luke Skywalker')
        })
        it('should render height', () => {
            cy.get('[data-testid="height"]').contains('Height: 172')
        })
        it('should render mass', () => {
            cy.get('[data-testid="mass"]').contains('Mass: 77')
        })
        it('should render haircolor', () => {
            cy.get('[data-testid="haircolor"]').contains('Hair color: blond')
        })
        it('should render skincolor', () => {
            cy.get('[data-testid="skincolor"]').contains('Skin color: fair')
        })
        it('should render eyecolor', () => {
            cy.get('[data-testid="eyecolor"]').contains('Eye color: blue')
        })
        it('should render birthyear', () => {
            cy.get('[data-testid="birthyear"]').contains('Birth year: 19BBY')
        })
        it('should render gender', () => {
            cy.get('[data-testid="gender"]').contains('Gender: male')
        })
        it('should render homeworld', () => {
            cy.get('[data-testid="homeworld"]').contains('Home world: /api/planets/1')
        })
        it('should render films', () => {
            cy.get('[data-testid="film-title"]').contains('Films')
            cy.get('[data-testid="film-0"]').contains('/api/films/1')
            cy.get('[data-testid="film-1"]').contains('/api/films/2')
            cy.get('[data-testid="film-2"]').contains('/api/films/3')
            cy.get('[data-testid="film-3"]').contains('/api/films/6')
        })
        it('should render species', () => {
            cy.get('[data-testid="species-title"]').contains('Species')
            cy.get('[data-testid="species-empty"]').contains('No species linked')
        })
        it('should render vehicles', () => {
            cy.get('[data-testid="vehicle-title"]').contains('Vehicles')
            cy.get('[data-testid="vehicle-0"]').contains('/api/vehicles/14')
            cy.get('[data-testid="vehicle-1"]').contains('/api/vehicles/30')
        })
        it('should render starships', () => {
            cy.get('[data-testid="starship-title"]').contains('Starships')
            cy.get('[data-testid="starship-0"]').contains('/api/starships/12')
            cy.get('[data-testid="starship-1"]').contains('/api/starships/22')
        })
        it('should render created', () => {
            cy.get('[data-testid="created"]').contains('Created: 09/12/2014 14:50:51')
        })
        it('should render edited', () => {
            cy.get('[data-testid="edited"]').contains('Edited: 20/12/2014 22:17:56')
        })
    })

    describe('first film', () => {
        beforeEach(() => {
            cy.visit('/films/1')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('A New Hope')
        })
        it('should render director', () => {
            cy.get('[data-testid="director"]').contains('Director: George Lucas')
        })
        it('should render producer', () => {
            cy.get('[data-testid="producer"]').contains('Producer: Gary Kurtz, Rick McCallum')
        })
        it('should render releasedate', () => {
            cy.get('[data-testid="releasedate"]').contains('Release date: 1977-05-25')
        })
    })

    describe('first planet', () => {
        beforeEach(() => {
            cy.visit('/planets/1')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('Tatooine')
        })
        it('should render climate', () => {
            cy.get('[data-testid="climate"]').contains('Climate: arid')
        })
        it('should render surface_water', () => {
            cy.get('[data-testid="surface_water"]').contains('Surface has water: yes')
        })
        it('should render diameter', () => {
            cy.get('[data-testid="diameter"]').contains('Diameter: 10465')
        })
        it('should render rotation_period', () => {
            cy.get('[data-testid="rotation_period"]').contains('Period of rotation: 23')
        })
        it('should render terrain', () => {
            cy.get('[data-testid="terrain"]').contains('Terrain: desert')
        })
        it('should render gravity', () => {
            cy.get('[data-testid="gravity"]').contains('Gravity: 1 standard')
        })
        it('should render orbital_period', () => {
            cy.get('[data-testid="orbital_period"]').contains('Orbital period: 304')
        })
        it('should render population', () => {
            cy.get('[data-testid="population"]').contains('Population: 200000')
        })
        it('should render created', () => {
            cy.get('[data-testid="created"]').contains('Created: 09/12/2014 14:50:49')
        })
        it('should render edited', () => {
            cy.get('[data-testid="edited"]').contains('Edited: 20/12/2014 21:58:18')
        })
    })

    describe('first species', () => {
        beforeEach(() => {
            cy.visit('/species/1')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('Human')
        })
        it('should render classification', () => {
            cy.get('[data-testid="classification"]').contains('Classification: mammal')
        })
        it('should render designation', () => {
            cy.get('[data-testid="designation"]').contains('Designation: sentient')
        })
        it('should render eye_colors', () => {
            cy.get('[data-testid="eye_colors"]').contains('Eye colors: brown, blue, green, hazel, grey, amber')
        })
        it('should render skin_colors', () => {
            cy.get('[data-testid="skin_colors"]').contains('Skin colors: caucasian, black, asian, hispanic')
        })
        it('should render language', () => {
            cy.get('[data-testid="language"]').contains('Language: Galactic Basic')
        })
        it('should render hair_colors', () => {
            cy.get('[data-testid="hair_colors"]').contains('Hair colors: blonde, brown, black, red')
        })
        it('should render homeworld', () => {
            cy.get('[data-testid="homeworld"]').contains('Home world: /api/planets/9')
        })
        it('should render average_lifespan', () => {
            cy.get('[data-testid="average_lifespan"]').contains('Average lifespan: 120')
        })
        it('should render average_height', () => {
            cy.get('[data-testid="average_height"]').contains('Average height: 180')
        })
        it('should render created', () => {
            cy.get('[data-testid="created"]').contains('Created: 10/12/2014 14:52:11')
        })
        it('should render edited', () => {
            cy.get('[data-testid="edited"]').contains('Edited: 20/12/2014 22:36:42')
        })
    })

    describe('first vehicle', () => {
        beforeEach(() => {
            cy.visit('/vehicles/4')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('Sand Crawler')
        })
        it('should render consumables', () => {
            cy.get('[data-testid="consumables"]').contains('Consumables: 2 months')
        })
        it('should render cargo_capacity', () => {
            cy.get('[data-testid="cargo_capacity"]').contains('Cargo capacity: 50000')
        })
        it('should render passengers', () => {
            cy.get('[data-testid="passengers"]').contains('Passengers: 30')
        })
        it('should render max_atmosphering_speed', () => {
            cy.get('[data-testid="max_atmosphering_speed"]').contains('Max atmosphering speed: 30')
        })
        it('should render crew', () => {
            cy.get('[data-testid="crew"]').contains('Crew: 46')
        })
        it('should render length', () => {
            cy.get('[data-testid="length"]').contains('Length: 36.8')
        })
        it('should render model', () => {
            cy.get('[data-testid="model"]').contains('Model: Digger Crawler')
        })
        it('should render cost_in_credits', () => {
            cy.get('[data-testid="cost_in_credits"]').contains('Cost in credits: 150000')
        })
        it('should render manufacturer', () => {
            cy.get('[data-testid="manufacturer"]').contains('Manufacturer: Corellia Mining Corporation')
        })
        it('should render vehicle_class', () => {
            cy.get('[data-testid="vehicle_class"]').contains('Vehicle class: wheeled')
        })
        it('should render created', () => {
            cy.get('[data-testid="created"]').contains('Created: 10/12/2014 16:36:25')
        })
        it('should render edited', () => {
            cy.get('[data-testid="edited"]').contains('Edited: 20/12/2014 22:30:21')
        })
    })

    describe('first starship', () => {
        beforeEach(() => {
            cy.visit('/starships/2')
        })
        it('should render title', () => {
            cy.get('[data-testid="description-title"]').contains('CR90 corvette')
        })
        it('should render consumables', () => {
            cy.get('[data-testid="consumables"]').contains('Consumables: 1 year')
        })
        it('should render cargo_capacity', () => {
            cy.get('[data-testid="cargo_capacity"]').contains('Cargo capacity: 3000000')
        })
        it('should render passengers', () => {
            cy.get('[data-testid="passengers"]').contains('Passengers: 600')
        })
        it('should render max_atmosphering_speed', () => {
            cy.get('[data-testid="max_atmosphering_speed"]').contains('Max atmosphering speed: 950')
        })
        it('should render crew', () => {
            cy.get('[data-testid="crew"]').contains('Crew: 30-165')
        })
        it('should render length', () => {
            cy.get('[data-testid="length"]').contains('Length: 150')
        })
        it('should render model', () => {
            cy.get('[data-testid="model"]').contains('Model: CR90 corvette')
        })
        it('should render cost_in_credits', () => {
            cy.get('[data-testid="cost_in_credits"]').contains('Cost in credits: 3500000')
        })
        it('should render manufacturer', () => {
            cy.get('[data-testid="manufacturer"]').contains('Manufacturer: Corellian Engineering Corporation')
        })
        it('should render starship_class', () => {
            cy.get('[data-testid="starship_class"]').contains('Starship class: corvette')
        })
        it('should render hyperdrive_rating', () => {
            cy.get('[data-testid="hyperdrive_rating"]').contains('Hyperdrive rating: 2.0')
        })
        it('should render created', () => {
            cy.get('[data-testid="created"]').contains('Created: 10/12/2014 15:20:33')
        })
        it('should render edited', () => {
            cy.get('[data-testid="edited"]').contains('Edited: 20/12/2014 22:23:49')
        })
    })
})

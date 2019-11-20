
export default class HdRezkaServices {
    film = [
        {
            id: 100,
            title: 'EL Camino: The braking bad',
            image: 'https://hdrezka.download/i/2019/10/21/sf2ad721011c2mj67d63i.jpg',
            text: '2019, США, Драмы'
        },
        {
            id: 101,
            title: 'In The Tall Grass',
            image: 'https://hdrezka.download/i/2019/10/21/d351452afc2cdvr98g36b.jpg',
            text: '2019, Канада, Триллеры'
        }
    ];

    serials = [
        {
            id: 1,
            title: 'See',
            image: 'https://hdrezka.download/i/2019/11/3/oa0d0af909805zx12r89l.png',
            text: '2019 - ..., США, Драмы'
        },
        {
            id: 2,
            title: 'The Boys',
            image: 'https://hdrezka.download/i/2019/10/28/cdff4268612bahw23z47n.jpg',
            text: '2019 - ..., США, Боевики'
        },
        {
            id: 3,
            title: 'Black Mirror',
            image: 'https://collegian.com/wp-content/uploads/2018/01/black-mirror.jpg',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 4,
            title: 'Chernobyl',
            image: 'https://hdrezka.download/i/2019/11/13/r580524f9562crg36z99h.png',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 5,
            title: 'Pandora',
            image: 'https://hdrezka.download/i/2019/10/31/t6324f8c796fdud99k69k.jpg',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 6,
            title: 'Euphoria',
            image: 'https://hdrezka.download/i/2019/10/28/w999d5953e1c8sm99b19i.png',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 7,
            title: 'See',
            image: 'https://hdrezka.download/i/2019/11/3/oa0d0af909805zx12r89l.png',
            text: '2019 - ..., США, Драмы'
        },
        {
            id: 8,
            title: 'The Boys',
            image: 'https://hdrezka.download/i/2019/10/28/cdff4268612bahw23z47n.jpg',
            text: '2019 - ..., США, Боевики'
        },
        {
            id: 9,
            title: 'Black Mirror',
            image: 'https://collegian.com/wp-content/uploads/2018/01/black-mirror.jpg',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 10,
            title: 'Chernobyl',
            image: 'https://hdrezka.download/i/2019/11/13/r580524f9562crg36z99h.png',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 11,
            title: 'Pandora',
            image: 'https://hdrezka.download/i/2019/10/31/t6324f8c796fdud99k69k.jpg',
            text: '2011 - ..., Великобритания, Фантастика'
        },
        {
            id: 12,
            title: 'Euphoria',
            image: 'https://hdrezka.download/i/2019/10/28/w999d5953e1c8sm99b19i.png',
            text: '2011 - ..., Великобритания, Фантастика'
        }

    ];

    cartoons = [
        {
            id: 201,
            title: 'Star vs. The Forces of Evil',
            image: 'https://hdrezka.download/i/2019/11/12/ab60d653fc595xh71z91l.png',
            text: '2015-2019, США, Фантастика'
        },
        {
            id: 202,
            title: 'Rick and Morty',
            image: 'https://hdrezka.download/i/2019/11/1/f990d8fc5b193xx78k69i.png',
            text: '2013 - ..., США, Комедии'
        },
        {
            id: 209,
            title: 'Final Space',
            image: 'https://hdrezka.download/i/2019/10/28/gc9b7675f0987zk67h26g.png',
            text: '2018 - ..., США, Комедии'
        }
    ];

    anime = [
        {
            id: 301,
            title: 'DEVILMAN: crybaby',
            image: 'https://hdrezka.download/i/2019/11/14/jc2773526b18csa93s86x.png',
            text: '2015-2019, США, Фантастика'
        },
        {
            id: 302,
            title: 'Vinland Saga',
            image: 'https://hdrezka.download/i/2019/10/22/b6c8bb8bab3a8pt36g33z.jpg',
            text: '2013 - ..., США, Комедии'
        },
        {
            id: 203,
            title: 'Dr. Stone',
            image: 'https://hdrezka.download/i/2019/10/20/vbfada02f915aih93o68v.jpg',
            text: '2019 - ..., Япония, Приключения'
        }
    ];
    getFilms = () => {
        return new Promise(resolve => {
            resolve(this.film)
        })

    };

    getSerials = () => {
        return new Promise(resolve => {
            resolve(this.serials)
        })
    };

    getCartoons = () => {
        return new Promise(resolve => {
            resolve(this.cartoons)
        })
    };

    getAnime = () => {
        return new Promise(resolve => {
            resolve(this.anime)
        })
    };
    getAllItems = () => {
        return new Promise(resolve => {
            resolve([...this.film, ...this.cartoons, ...this.anime, ...this.serials])
        })
    };
    getItemDetails = (itemId) =>{
        return new Promise(resolve =>{
            const allItem = [...this.film, ...this.cartoons, ...this.anime, ...this.serials];
            const item = allItem.find((obj =>obj.id === +itemId));
            resolve( item)
        })
    }
}
const filmsLoaded = (newFilms) =>{
    return {
        type: 'FILMS_LOADED',
        payload: newFilms
    }

};
const searchItem = (valueData) =>{

    return {
        type: 'SEARCH_ITEM',
        payload: valueData
    }
};
const itemDetailsLoaded = (itemId) =>{
    return {
        type: 'ITEM_DETAIL_LOADED',
        payload: itemId
    }
};
export {
    filmsLoaded,
    searchItem,
    itemDetailsLoaded
}

const initialState ={
    films:[],
    items:[],
    value:'',
    itemData:[]

};

const reducer = (state = initialState, actions) =>{

    switch (actions.type) {
        case 'FILMS_LOADED':
            return {
                ...state,
                films: actions.payload,
                items: actions.payload,
            };
        case 'SEARCH_ITEM':
            const value = actions.payload;
            const arrFilms = state.items;
             const newArr = arrFilms.filter((el) =>{
                return  el.title.toLowerCase().indexOf(value)>-1
             });
            return{
                ...state,
                films: newArr,
                value: actions.payload
            };
        case 'ITEM_DETAIL_LOADED':
            const itemDetails = actions.payload;
            return {
                ...state,
                itemData: itemDetails
                
            };
        default: return state

    }
};
export default reducer
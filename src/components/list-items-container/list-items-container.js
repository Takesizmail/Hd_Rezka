import React,{Component} from 'react'
import ListFilmUl from "../list-items-ul";
import {connect } from 'react-redux'
import {filmsLoaded} from "../../actions/actions";

class ListItemsContainer extends Component {

componentDidMount() {
    const { getData, filmsLoaded} =this.props;
    console.log(getData);
    getData().then((data) => filmsLoaded(data));

}
onLoadedItem = (id) => {
    this.props.onItemSelected(id)
};

    render() {
        const {films,downloadText} = this.props;

        return(
            <ListFilmUl items={films} onLoadedItem={this.onLoadedItem} downloadText={downloadText}/>
        )
    }
}
const mapStateToProps =(state) =>{
return {
    films: state.films
}
};

const mapDispatchToProps = {
    filmsLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(ListItemsContainer)
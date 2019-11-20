import React,{Component} from 'react'
import './search-panel.css'
import {connect} from 'react-redux'
import {searchItem,filmsLoaded} from "../../actions/actions";


class SearchPanel extends Component{

    changeNode = (e) =>{
        const search = e.target.value;
        this.props.searchItem(search)
    };


    render() {
        return (
            <div className="container">
                <input type="text"
                       placeholder="Search..."
                       onChange={this.changeNode}
                       value={this.props.value}
                />
                <div className="search">

                </div>
            </div>
        )
    }

};
 const mapStateToProps = (state) =>{
   return{
       value : state.value
   }
};
 const mapDispatchToProps ={
     filmsLoaded,
    searchItem
};
export default connect(mapStateToProps,mapDispatchToProps)(SearchPanel)
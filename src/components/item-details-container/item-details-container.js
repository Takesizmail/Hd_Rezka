import React,{Component} from 'react'
import ItemDetails from "../item-details";
import {connect} from 'react-redux'
import {itemDetailsLoaded} from "../../actions/actions";


class ItemDetailsContainer extends Component{

    componentDidMount() {
        const {idItem,itemDetailsLoaded,getData} =this.props;
        //загуражаю дані з сервера в редюсер
        getData(idItem)
            .then( (item) => itemDetailsLoaded(item) );

    }

    render() {
        const {itemData } = this.props;
        console.log(itemData);
    return <ItemDetails itemData ={itemData} />
}
}

 const mapStateToProps = (state) => {
     return {
         itemData: state.itemData
     }

 };
const mapDispatchToProps = {
 itemDetailsLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(ItemDetailsContainer)
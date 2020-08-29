import React, {Component} from 'react';
import {connect} from "react-redux";

import MenuListItem from '../menu-list-item';
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested()

        const {RestoService} = this.props
        const menus = new RestoService()

        menus.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError())
    }

    render() {
        const {menuItems, loading, error} = this.props

        if (error) {
            return <Error />
        }

        if (loading) {
            return <Spinner/>
        }

        const menuElems = menuItems.map(item => <MenuListItem key={item.id} menuItem={item}/>)

        return (
            <View elems={menuElems}/>
        )
    }
}

const View = ({elems}) => {
    return (
        <ul className="menu__list">
            {elems}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList))

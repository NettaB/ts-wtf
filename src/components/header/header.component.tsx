import React from 'react';
import './header.scss';
import { MainDropdown } from "./dropdown"; 

export class Header extends React.Component {
    toggleDropdown = () => {
        console.log('dropdown');
        this.renderDropdown() //idea is to toggle the dropdown with click... not there yet obvs
    }

    renderDropdown =() => {
        return (
            <MainDropdown />
        )
    }

    render() {
        return (
                <div className={'header-container'}>
                    <div className={'header-nav'}>
                        <div className={'icon-container nav-item'}> <i className="fas fa-bars"></i></div>
                        <div className={'right-nav'}>
                            <div className={'icon-container nav-item'}><i className="fas fa-envelope"></i></div>
                            <div className={'icon-container nav-item'}><i className="fas fa-bell"></i></div>
                            <div className={'text-nav-container nav-item'} onClick={this.toggleDropdown}>Lynx Research</div>
                        </div>                       
                    </div>
                </div>          
        )
    }
}
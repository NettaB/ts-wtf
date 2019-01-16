import React from 'react';
import './header.scss';
import { MainDropdown } from "./dropdown"; 

interface State {
    displayDropdown: boolean
}


export class Header extends React.Component<State> {

    state = {
        displayDropdown: false
    };


    toggleDropdown = () => {
       this.setState({
            displayDropdown: !this.state.displayDropdown
       })
    }

    renderDropdown = () => {
        return (
            <MainDropdown displayed={this.state.displayDropdown} />
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
                    {this.renderDropdown()}
                </div>          
        )
    }
}
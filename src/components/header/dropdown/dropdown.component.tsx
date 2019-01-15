import React from 'react';
import { Props } from 'Types/components/main-dropdown.props';
import './dropdown.scss';

export class MainDropdown extends React.Component {
    render() {
        return (
                <div className={'dropdown-container'} >
                    <div className={'dropdown-item'}><i className="far fa-user">Profile</i></div>
                    <div className={'dropdown-item'}><i className="far fa-envelope">Inbox</i></div>
                    <div className={'dropdown-item'}><i className="fa fa-cog"></i>Settings</div>
                    <div className="dropdown-divider"></div>
                    <div className={'dropdown-item'}><i className="fa fa-power-off"></i>Log Out</div>
                </div>          
        )
    }
}
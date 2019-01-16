import React from 'react';
// import { Props } from 'Types/components/main-dropdown.props';
import './dropdown.scss';

interface State {
    displayed: boolean
}

export interface Props {
    displayed: boolean
}


export class MainDropdown extends React.Component<Props, State> {

    state = {
        displayed: this.props.displayed
    }

    render() {
            return this.props.displayed? (
                <div className={'dropdown-container'} >
                    <div className={'dropdown-item'}>
                        <span><i className="far fa-user"></i></span>
                        <span className={'dropdown-cat'}>Profile</span>
                    </div>
                    <div className={'dropdown-item'}>
                        <span><i className="far fa-envelope"></i></span>
                        <span className={'dropdown-cat'}>Inbox</span>
                    </div>
                    <div className={'dropdown-item'}>
                        <span><i className="fa fa-cog"></i></span>
                        <span className={'dropdown-cat'}>Settings</span>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className={'dropdown-item'}>
                        <span><i className="fa fa-power-off"></i></span>
                        <span className={'dropdown-cat'}>Log Out</span>
                    </div>
                </div>          
            ) : null
    }
}
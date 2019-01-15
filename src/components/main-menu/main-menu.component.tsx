import React from 'react';
import { Link } from 'react-router-dom';
import './main-menu.scss';

export class MainMenu extends React.Component {

    render() {
        return (
            <nav className={'main-menu'}>
                <div className={'nav-list-container'}>
                    <Link to={'/scheduling'} className={'item'} >
                        Scheduling
                    </Link>
                    <Link to={'/datasets'} className={'item'} >
                        Uploaded Datasets
                    </Link>
                </div>
            </nav>
        );
    }
}
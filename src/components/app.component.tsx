import React from 'react';
import './app.scss';
import { Switch, Route } from "react-router-dom";
import { MainMenu } from "./main-menu";
import { Header } from "./header";
import { DatasetsComponent } from "./datasets";

export class App extends React.Component {
    render() {
        return (
            <div className={'app'}>
                <div className={'nav-container'}>                   
                    <MainMenu />
                </div>
                <div className={'app-view'}>
                     <Header />
                    <div className={'dynmic-view'}>
                        <Switch>
                            <Route path={'/datasets'} component={ DatasetsComponent } />
                        </Switch>
                    </div>      
                </div>             
            </div>
        )
    }
}
import React from 'react';
import './datasets.scss';

import { Table } from 'react-bootstrap';


export class DatasetsComponent extends React.Component {

    render() {

        return (
            <Table className={'datasets-table'} striped bordered condensed hover responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Revision</th>
                    <th>Last Modified</th>
                    <th>Owner</th>
                    <th>Rating</th>
                    <th>Size</th>
                    <th>$ Revenue</th>
                    <th>Stats</th>
                    <th>Linage</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Claims</td>
                        <td>3.0.1</td>
                        <td>2018-10-10</td>
                        <td>Omer</td>
                        <td>-icon here-</td>
                        <td>5,000</td>
                        <td>10,000</td>
                        <td>-button here-</td>
                        <td>-button here-</td>
                        <td>-button here-</td>
                    </tr>
                    <tr>
                        <td>Claims</td>
                        <td>3.0.1</td>
                        <td>2018-10-10</td>
                        <td>Omer</td>
                        <td>-icon here-</td>
                        <td>5,000</td>
                        <td>10,000</td>
                        <td>-button here-</td>
                        <td>-button here-</td>
                        <td>-button here-</td>
                    </tr>
                </tbody>
            </Table>
            
        );
    }

    
}
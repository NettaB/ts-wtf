import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.scss';
import {Root} from 'Components';
import store from "./store";

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
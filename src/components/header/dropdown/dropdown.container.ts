import { connect } from 'react-redux';
import { State } from 'Types/state'
// import {revealTile, toggleMarker} from "Store/actions";
import { MainDropdown } from './dropdown.component';
import { StateProps } from 'Types/components/main-dropdown.props';

const mapStateToProps = (state: State): StateProps => {

    return {
        dislayed: state.MainNavState.dropdownOpened
    };
};

export const TileContainer = connect(mapStateToProps)(MainDropdown);
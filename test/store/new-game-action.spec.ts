import {Store} from "redux";

// jest.mock('Util/random-mine-factory');
// jest.mock('Util/uuid');

import {startNewGame as action} from "Store/actions";
import {create} from 'Store';
import {GameConfig} from "Types/game";
import {State} from "Types/state";
import {getBoardSize} from "Store/selectors";

describe('new game action dispatched', () => {

    let store: Store;

    beforeEach(() => {
        store = create();
    });

    const dispatch = (config: GameConfig) => {
        store.dispatch(action(config));
    };

    describe('state invariants', () => {

        const config = {size: 5, mines: 6, displayName: 'test'};

        beforeEach(() => {
            dispatch(config);
        });

        test('the specified board size is returned by the selector', () => {
            //arrange
            const state: State = store.getState();

            //assert
            expect(getBoardSize(state)).toBe(config.size);
        });

        test('there is no mine revealed', () => {

        });

        test('a mine map is generated from the random-mine-factory', () => {

        });

        test('a descriptor with the specified name and random uuid becomes a part of the game state', () => {

        });
    });

});
import { main } from './reducers';
import { actionTypes } from './actions';

describe('main reducer', () => {
    it('should return the initial state', () => {
        expect(main(undefined, {})).toEqual({
            isLoading: false
        });
    });

    it('should handle SET_LOADING', () => {
        expect(
            main([], {
                type: actionTypes.SET_LOADING,
                loading: true
            })
        ).toEqual({
            isLoading: true
        });
    });
});

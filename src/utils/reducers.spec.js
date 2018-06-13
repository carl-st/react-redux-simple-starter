import { main } from './reducers';
import { actionTypes } from './actions';

describe('main reducer', () => {
    it('should return the initial state', () => {
        expect(main(undefined, {})).toEqual({
            isLoading: false
        });
    });

    it('should handle IS_LOADING', () => {
        expect(
            main([], {
                type: actionTypes.IS_LOADING,
                loading: true
            })
        ).toEqual({
            isLoading: true
        });
    });
});

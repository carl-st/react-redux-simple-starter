import { setLoading, actionTypes } from './actions';

describe('actions', () => {
    it('should create an action to set isLoading variable', () => {
        const loading = true;
        const expectedAction = {
            type: actionTypes.SET_LOADING,
            loading
        };
        expect(setLoading(true)).toEqual(expectedAction);
    });
});
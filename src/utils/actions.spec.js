import { isLoading, actionTypes } from './actions';

describe('actions', () => {
    it('should create an action to set isLoading variable', () => {
        const loading = true;
        const expectedAction = {
            type: actionTypes.IS_LOADING,
            loading
        };
        expect(isLoading(true)).toEqual(expectedAction);
    });
});
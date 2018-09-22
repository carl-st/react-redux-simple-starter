const actionTypes = {
    SET_LOADING: 'SET_LOADING'
};

const setLoading = loading => ({
    type: actionTypes.SET_LOADING,
    loading
});

export {
    actionTypes,
    setLoading
};
const actionTypes = {
    IS_LOADING: 'IS_LOADING'
};

const isLoading = loading => ({
    type: actionTypes.IS_LOADING,
    loading
});

export {
    actionTypes,
    isLoading
};
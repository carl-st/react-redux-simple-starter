import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { someComponentStrings } from './../../../constants';
import './SomeComponent.scss';

class SomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoading, onClick } = this.props;
        const { on, off } = someComponentStrings;
        return (
            <Fragment>
                <button onClick={onClick}>
                    {isLoading ? on : off}
                </button>
                {isLoading && <div className='loader' />}
            </Fragment>
        );
    }
}

SomeComponent.propTypes = {
    isLoading: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};


export default SomeComponent;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './SomeComponent.scss';

class SomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoading, greeting, onClick } = this.props;
        return (
            <Fragment>
                <div onClick={onClick}>
                    {greeting}
                </div>
                {isLoading && <div className='loader' />}
            </Fragment>
        );
    }
}

SomeComponent.propTypes = {
    greeting: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};


export default SomeComponent;

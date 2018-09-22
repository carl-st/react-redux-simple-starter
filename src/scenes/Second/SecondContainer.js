import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { secondContainerStrings } from './../../constants';
import './../../styles/main.scss';

class SecondContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {secondContainerStrings.title}
            </Fragment>
        );
    }

}

const mapStateToProps = ({ main }) => {
    return {
        isLoading: main.isLoading
    };
};

export default connect(mapStateToProps)(SecondContainer);
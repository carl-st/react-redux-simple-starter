import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './../../styles/main.scss';
import { notFoundStrings } from '../../constants';

class NotFoundContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {notFoundStrings.title}
            </Fragment>
        );
    }

}

const mapStateToProps = ({ main }) => {
    return {
        isLoading: main.isLoading
    };
};

export default connect(mapStateToProps)(NotFoundContainer);
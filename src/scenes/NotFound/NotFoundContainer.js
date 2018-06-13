import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './../../styles/main.scss';

class NotFoundContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                404: This is not the page you are looking for.
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
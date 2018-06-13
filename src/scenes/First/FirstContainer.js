import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isLoading as setLoading } from './../../utils/actions';
import { SomeComponent } from './components';
import './../../styles/main.scss';

class FirstContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        const { dispatch } = this.props;
        dispatch(setLoading(true));
    }

    render() {
        const { isLoading } = this.props;
        return (
            <Fragment>
                <div className='content'>
                    <SomeComponent
                        greeting='Hello!'
                        isLoading={isLoading}
                        onClick={this.handleOnClick}
                    />
                </div>
            </Fragment>
        );
    }

}

FirstContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
};

const mapStateToProps = ({ main }) => {
    return {
        isLoading: main.isLoading
    };
};

export default connect(mapStateToProps)(FirstContainer);
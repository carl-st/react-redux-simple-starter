import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLoading } from './../../utils/actions';
import { SomeComponent } from './components';
import { firstContainerStrings } from '../../constants';
import './../../styles/main.scss';

class FirstContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        const { setLoadingState, isLoading } = this.props;
        setLoadingState(!isLoading);
    }

    render() {
        const { isLoading } = this.props;
        return (
            <Fragment>
                <div className='content'>
                    {firstContainerStrings.clickInfo}
                    <SomeComponent
                        isLoading={isLoading}
                        onClick={this.handleOnClick}
                    />
                </div>
            </Fragment>
        );
    }

}

FirstContainer.propTypes = {
    isLoading: PropTypes.bool,
    setLoadingState: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        setLoadingState: loadingState => dispatch(setLoading(loadingState))
    };
};

const mapStateToProps = ({ main }) => {
    return {
        isLoading: main.isLoading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer);
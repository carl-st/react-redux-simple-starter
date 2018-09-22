import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SomeComponent } from ".";

describe('<SomeComponent />', () => {
    const props = {
        isLoading: false,
        onClick: () => {}
    };
    
    it('renders correctly with provided props', () => {
        const wrapper = shallow(<SomeComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call function passed as [onClick] prop', () => {
        const onClickSpy = sinon.spy();
        const wrapper = shallow(<SomeComponent {...props} onClick={onClickSpy} />);

        wrapper.find('button').first().simulate('click');

        expect(onClickSpy.called).toBe(true);
    });


});

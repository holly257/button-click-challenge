import React from 'react';
import {shallow} from 'enzyme';


import Button from './Button';

describe('<Button />', () => {
   
    it('Should call props.onClick when the button is clicked', () => {
        const mockCallBack = jest.fn();
        
        const wrapper = shallow(<Button onClick={mockCallBackClick} className="test" text="test"/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('simulates click events', () => {
        const onButtonClick = sinon.spy();

        const wrapper = shallow(<Button  />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
      });
});


// 
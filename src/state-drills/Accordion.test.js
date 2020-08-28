import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import toJson from 'enzyme-to-json';

describe('Accordion component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ];

    it('renders an empty list when sections are not supplied', () => {
        const wrapper = shallow(<Accordion />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('renders no section as open by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('opens a section when a button is clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('only opens the last section clicked when multiple have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
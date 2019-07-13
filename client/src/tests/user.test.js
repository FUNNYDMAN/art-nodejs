import React from 'react';
import UserList from "../user/UserList";
import {shallow} from '../enzyme';

// todo: fix tests
// https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest
it('render User component without crashing', () => {
    const wrapper = shallow(<UserList/>);
});

import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Login from '../client/components/Login.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Login Component', () => {
    describe('Redirecting', () => {
      let wrapper;
      const initialState = {
        form: {
          login: {
            username: '',
            password: '',
            validated: false,
            loginAttempts: 0,
            enterKeyPressed: false,
          },
        },
      };
      const mockStore = configureStore();
      const store = mockStore(initialState);
      const validateLoginMock = jest.fn();
      const validateLoginInput = jest.fn();
      const props = {
        validated: false,
        loginAttempts: 0,
        validateLogin: validateLoginMock,
        loginInput: validateLoginInput,
      };

      beforeAll(() => {
        wrapper = mount(<Login store={store} props={props} />);
      });

      it('Has <h1> with text "Voyajour"', () => {
        expect(wrapper.find('h1').text()).toEqual('Voyajour');
      });

      // it('Has a button that calls validateLogin on click', () => {
      //   wrapper.find('button').simulate('click');
      //   expect(validateLoginMock).toHaveBeenCalled();
      // });
    });
  });
});

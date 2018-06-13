import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import axios from 'axios';
import Root from 'Root';
import App from 'components/App';

describe('integrations', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <App />
      </Root>
    );

    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }]
    });
  });

  afterEach(() => {
    wrapper.unmount();
    moxios.uninstall();
  });

  it('can fetch a list of comments and display them', done => {
    wrapper.find('button').simulate('click');

    // waits for response to be fetched
    moxios.wait(() => {
      wrapper.update();

      try {
        expect(wrapper.find('li').length).toEqual(2);
        done();
      } catch(e) {
        done.fail(e)
      }
    });
  });
});

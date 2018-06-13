import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('CommentBox', () => {
  let wrapper;

  beforeEach(() => {
    // mounts the component and all of its children to the virtual DOM which enables interaction
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    // unmounts the component from the virtual DOM
    wrapper.unmount();
  });

  it('has a textarea and a submit button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('input[type="submit"]').length).toEqual(1);
  });

  describe('textarea', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      });
      wrapper.update();
    });

    it('has a textarea that users can type in', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    });

    it('has a form and empties textarea when submitted', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
  });
});

import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

const initialState = {
  comments: ['Comment 1', 'Comment 2']
};

describe('CommentList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('creates one li per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('it has the correct text', () => {
    expect(wrapper.render().text()).toContain('Comment 1');
    expect(wrapper.render().text()).toContain('Comment 2');
  });
});

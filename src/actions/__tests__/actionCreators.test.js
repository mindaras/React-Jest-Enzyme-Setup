import { saveComment } from 'actions/actionCreators';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has a correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual('SAVE_COMMENT');
  });

  it('has a correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});

import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

describe('commentsReducer', () => {
  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'New Comment' },
          newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
  });

  it('handles action of unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
  });
});

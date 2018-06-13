import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveComment, fetchComments } from 'actions/actionCreators';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  changeHandler(e) {
    e.preventDefault();

    this.setState({comment: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
      <div>
        <h4>Add a comment</h4>
        <form onSubmit={this.submitHandler.bind(this)}>
          <textarea value={this.state.comment} onChange={this.changeHandler.bind(this)} />
          <div>
            <input type="submit" />
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveComment,
    fetchComments
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);

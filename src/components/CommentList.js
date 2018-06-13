import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments(comments) {
    return comments.map((comment, i) => (
      <li key={i}>{comment}</li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderComments(this.props.comments)}
      </ul>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    comments: reduxState.comments
  };
}

export default connect(mapStateToProps)(CommentList);

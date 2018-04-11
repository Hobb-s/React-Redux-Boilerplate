import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    return (
      <div>
        {!this.props.user ? (
          <h4>Select a user</h4>
        ) : (
          <div>
            <img src={this.props.user.thumbnail} alt="" />
            <h2>
              {this.props.user.first} {this.props.user.last}
            </h2>
            <h3>Age: {this.props.user.age}</h3>
            <h3>Description: {this.props.user.description}</h3>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeAhead from '../../components/Typeahead';

class ComposeTweet extends Component {
  state = {
    maxChar: 140
  };

  renderTweetFooter () {
    const { maxChar } = this.state;

    return (
      <div>
        <p>{maxChar}</p>
        <button className='btn btn-primary'>Tweet</button>
      </div>
    );
  }

  render () {
    return (
      <div>
        <TypeAhead />
        {this.renderTweetFooter()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {};
  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators({}, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTweet);

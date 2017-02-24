import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeAhead from '../../components/Typeahead';

class ComposeTweet extends Component {

  render () {
    return (
      <div>
        <TypeAhead />
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

import React, { PropTypes, Component } from 'react';
import './ComposeTweet.scss';

export default class UserSelection extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render () {
    const user = this.props.model;

    if (user) {
      return (
        <p className='singleUserSelection'>
          <img src={user.profile_image_url} alt={user.name} />
          <strong>
            @{user.screen_name}
          </strong>
          <span>{user.name}</span>
        </p>
      );
    }
  }
}

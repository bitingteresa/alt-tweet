import React, { PropTypes, Component } from 'react';

export default class UserSelection extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render () {
    const user = this.props.model;

    if (user) {
      return (
        <p>
          <img src={user.profile_image_url} alt={user.name} />
          <strong>
            {user.screen_name}
          </strong>
          {user.name}
        </p>
      );
    }
  }
}

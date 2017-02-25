import React, { Component, PropTypes } from 'react';

export default class TypeaheadItem extends Component {
  static propTypes = {
    model: PropTypes.any,
    onClick: PropTypes.func,
    component: PropTypes.func
  }

  onClick () {
    this.props.onClick(this.props.model);
  }

  renderItem () {
    const { model, component } = this.props;
    let renderItem;

    //  If a component was passed
    if (component) {
      renderItem = React.createElement(this.props.component, {
        model
      });
    } else if (typeof model !== 'object') {
      //  Set model if just a simple value
      renderItem = model;
    } else {
      //  Fallback and just display key value pairs
      renderItem = Object.keys(model)
        .map(k => <p key={`item-${k}`}><strong>{k}</strong> : {model[k]}</p>);
    }

    return renderItem;
  }

  render () {
    return (
      <div
        onClick={::this.onClick}
      >
        {this.renderItem()}
      </div>
    );
  }
}

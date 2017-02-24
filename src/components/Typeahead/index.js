import React, { Component, PropTypes } from 'react';
import TypeaheadItem from './TypeaheadItem';

export default class TypeAhead extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    list: PropTypes.array,
    onSelect: PropTypes.func,
    component: PropTypes.func
  };

  state = {
    show: false,
    number: -1
  };

  onChange (e) {
    this.props.onChange(e);
    this.setState({ show: true });
  }

  onSelect (item) {
    this.props.onSelect(item);
    this.hideList();
  }

  onKeyDown (e) {
    const { number } = this.state;
    const { list } = this.props;

    // need to check list.length for these
    if (e.keyCode === 40 && number < list.length - 1) {
      this.setState({
        number: number + 1
      });
    }

    if (e.keyCode === 38 && number > -1) {
      this.setState({
        number: number - 1
      });
    }

    if (e.keyCode === 13) {
      this.onSelect(list[number]);
    }
  }

  hideList () {
    this.setState({ show: false });
  }

  renderList (list) {
    const { show } = this.state;

    if (list.length && show) {
      const items = list.map((item, idx) => {
        return (
          <TypeaheadItem
            key={idx}
            model={item}
            onClick={::this.onSelect}
            component={this.props.component}
          />
        );
      });

      return (<div>{items}</div>);
    }
  }

  renderInput () {
    const { value } = this.props;

    return (
      <textarea
        className='form-control'
        onChange={::this.onChange}
        value={value}
        onKeyDown={::this.onKeyDown}
      />
    );
  }

  render () {
    const { label, list } = this.props;
    const { show } = this.state;

    return (
      <div>
        {label}
        {this.renderInput()}
        {show && list.length ? this.renderList(list) : ''}
      </div>
    );
  }
}

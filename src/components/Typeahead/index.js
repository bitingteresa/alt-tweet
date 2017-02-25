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
    this.hideList();
    this.props.onSelect(item);
  }

  onKeyDown (e) {
    const { number, show } = this.state;
    const { list } = this.props;
    const showingList = list.length && show;
    const downArrow = e.keyCode === 40 && number < list.length - 1;
    const upArrow = e.keyCode === 38 && number > -1;
    const enter = e.keyCode === 13;

    if (showingList && downArrow) {
      console.log('down');
      this.setState({
        number: number + 1
      });
    }

    if (showingList && upArrow) {
      console.log('up');
      this.setState({
        number: number - 1
      });
    }


    if (showingList && enter) {
      this.onSelect(list[number]);
      this.setState({ number: -1 });
    }
  }

  hideList () {
    this.setState({ show: false });
  }

  renderList (list) {
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

  renderInput () {
    const { value } = this.props;

    return (
      <input
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

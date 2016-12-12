
import { connect } from 'react-redux';
import React, { Component } from 'react';

const fs = require('fs');

class DragDropZone extends Component {

  static mapStateToProps(state) {
    return { ...state.main };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log(fs);
  }

  componentDidMount() {
    this.zone.ondragover = (ev) => {
      ev.preventDefault();
    };
    this.zone.ondrop = (ev) => {
      if (!ev.dataTransfer.files) {
        return;
      }
      const fileNames = [].slice.call(ev.dataTransfer.files).map(f => f.name);
      ev.preventDefault();
      this.props.onDrop(fileNames);
    };
  }


  render() {
    return (
      <div
        ref={(zone) => { this.zone = zone; }} className="drag-drop-zone"
      >
        {this.props.children}
      </div>
    );
  }
}

DragDropZone.propTypes = {
  onDrop: React.PropTypes.func,
  children: React.PropTypes.element.isRequired
};

export default connect(DragDropZone.mapStateToProps)(DragDropZone);

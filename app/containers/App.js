// @flow
import React, { Component, PropTypes } from 'react';
import styles from './App.css';
import Sidebar from './Sidebar.js';
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.sidebar}>
        <Sidebar></Sidebar>
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
      );
  }
}

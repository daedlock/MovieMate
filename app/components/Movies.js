import {
  connect
} from 'react-redux';
import React, {
  Component
} from 'react';
import {
  remote
} from 'electron';
import styles from './Movies.css';
import {
  testAction,
  testAsyncAction
} from '../actions/actionCreators';
import DragDropZone from './DragDropZone';

class Movies extends Component {
  static mapStateToProps(state) {
    console.log(state);
    return { ...state.main };
  }


  closeApp() {
    remote.require('electron').app.quit();
  }

  getMovieInfo(movie) {
    const ptn = remote.require('parse-torrent-name');
    return ptn(movie);
  }

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const recursive = remote.require('recursive-readdir');
    const path = remote.require('path');

    recursive('/Volumes/Seagate HDD/Movies',
      (err, files) => {
        if (err) {
          return console.error(err);
        }
        const movies = files
          .filter(f => ['.mp4', '.avi', '.wmv', '.mkv'].includes(path.extname(f)))
          .map(f => this.getMovieInfo(path.basename(f)));
        this.setState({
          movies
        });
      });
  }

  render() {
    return (
      <div className={styles.movies}>
       Movies Component
      </div>
    );
  }
}

export default connect(Movies.mapStateToProps)(Movies);

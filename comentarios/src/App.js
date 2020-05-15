import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import './App.css';
import { database } from './firebase';

class App extends Component {
  state = {
    comments:[
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4'
    ]
  }

  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    })
  }

  componentDidMount() {
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      console.log(snapshot.val());
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            <NewComment sendComment={this.sendComment} />
          </div>
  
          <div>
            <Comments comments={this.state.comments} />
          </div>
  
        </header>
      </div>
    );
    }
}

export default App;

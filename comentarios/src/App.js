import React, { Component } from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import './App.css'
import { database } from './firebase'

class App extends Component {
  state = {
    comments:{},
    isLoading: false
  }

  sendComment = comment => {
    const id = database.ref().child('comments').push().key
    const comments = {}
      comments['comments/'+id] = {
        comment
      }

      database.ref().update(comments)

    /*this.setState({
      comments: [...this.state.comments, comment + ' ' + id]
    })*/
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

            <NewComment sendComment={this.sendComment} />  
            <Comments comments={this.state.comments} />

            {
              this.state.isLoading && <p>Carregando...</p>
            }
  
        </header>
      </div>
    )
    }
}

export default App
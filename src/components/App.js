import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getNotes, saveNote, deleteNote} from '../actions/notesActions';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userActions';

class App extends Component {
  constructor(props){
    super(props);
    //state
    this.state = {
      title: '',
      body: ''
    };
    //bind
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.displayNotes = this.displayNotes.bind(this)
  }

  // lifecycle method
  // componentDidMount(){
  //   this.props.getNotes();
  //   this.props.getUser();
  // }

  //handle submit
  handleSubmit(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: ''
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  displayNotes(){
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button className='btn btn-danger btn-xs' 
            onClick={()=>this.props.deleteNote(key)}>X</button>
        </NoteCard>
      )
    })
  }


  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input 
                    onChange={this.handleChange}
                    value={this.state.title}
                    type="text" 
                    name="title" 
                    className="form-control no-border" 
                    placeholder="Title" 
                    required
                    />
                </div>

                <div className="form-group">
                  <input 
                    onChange={this.handleChange}
                    value={this.state.body}
                    type="text" 
                    name="body" 
                    className="form-control no-border" 
                    placeholder="Body" 
                    required
                    />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Save</button>
                </div>
              </form>
              {this.displayNotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, {getNotes, saveNote, deleteNote, getUser}) (App);

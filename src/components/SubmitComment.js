import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmitComment extends Component{

    constructor(props){
        super(props);
        this.state = {
            commentBody: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            commentBody: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const comment = {
            commentBody: this.state.commentBody,
            uid: this.props.uid
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea 
                            onChange={this.handleChange}
                            name="commentBody" 
                            type="text"
                            className="form-control no-border"
                            placeholder="Type a comment here.."
                            required
                            >
                            </textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        uid: state.user.id,

    }
}

export default connect(mapStateToProps, {})(SubmitComment);
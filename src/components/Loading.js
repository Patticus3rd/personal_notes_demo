import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter you can access the history objects propperty
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { getNotes } from '../actions/notesActions';


class Loading extends Component {
    componentWillMount(){
        const {userLoading, notesLoading} = this.props;
        if (userLoading === undefined){
            this.props.getUser();
        }
        // if we havent tried to get notes, load notes
        if (notesLoading === undefined ){
            this.props.getNotes();
        }
    }
    
    componentWillReceiveProps(nextProps){
        //wait for user to get authenticated and try to load notes
        if (nextProps.notesLoading === -1 && nextProps.user !== null ){
            this.props.getNotes();
        }
    }
    
    render(){
        const { userLoading, notesLoading, children } = this.props;
        if (( !userLoading && !notesLoading) || this.props.user === null){
            return <div>{children}</div>
        } else {
            return <div>
                    <h2>Loading...</h2>
                    </div>
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    }
}

export default withRouter(connect(mapStateToProps, {getUser, getNotes})(Loading));
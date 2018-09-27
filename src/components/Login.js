import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin } from '../actions/userActions';

class Login extends Component {

    componentWillMount(){
        if(this.props.user !== null){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user !== null){
            nextProps.history.push('/')
        }
    }

    render(){
        return <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div 
                        className="col-sm-12 jumbotron"
                        style={{marginTop: '-20px'}}
                        >
                        <h1>
                            Login
                        </h1>
                    </div>
                    <div className="center">
                        <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Login With Google</button> 
                    </div>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state, ownProps){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { googleLogin }) (Login);
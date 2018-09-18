import React, { Component } from 'react';

class Login extends Component {
    render(){
        return <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron">
                        <h1>
                            Login with your favorite <b>Social Media</b>
                        </h1>
                    </div>
                    <div className="btn btn-danger btn-lg">
                        Login With Google
                    </div>
                    <div className="btn btn-danger btn-lg">
                        Login With Twitter
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Login;
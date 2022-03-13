import React, { Component } from 'react';
import axios from "axios";

export class Code extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            code: this.code
        };

        axios.post('code', data).then(
            res => {
                this.setState({
                    message: res.data.message,
                    cls: 'success'
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message,
                    cls: 'danger'
                })
            }
        )
    };

    render() {
        let message = '' ;

        if(this.state.message){
            const cls = 'alert alert-' + this.state.cls;
            message = (
                <div className={cls} role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                {message}
                <h3>
                    Code
                </h3>

                <div className="form-group">
                    {/* <label>
                         Code
                    </label> */}
                    <input type="code" className="form-control" placeholder="Code" onChange={e => this.code = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block">  <Link to={'/reset'}>checking the Code</Link></button> 

                {/* <button className="btn btn-primary btn-block"> Submit</button>  */}

                {/* <p className="forgot-password text-right">
                        <Link to={'/reset'}>Reset Password</Link>
                </p> */}

                {/* <button className="btn btn-primary btn-block" onClick={() => {
                    alert.show('Oh look, an alert!')
                    }}> Submit</button>  */}

            </form>
        )
    }
}

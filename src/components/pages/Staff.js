import React, { Component } from 'react';

class Staff extends Component {
    state = {currentUserName:'', currentUserEmail:''};

    componentDidMount = () => {
        let myIdToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({currentUserName:myIdToken.idToken.claims.name, currentUserEmail:myIdToken.idToken.claims.email} )
    }
    render() {
        let {currentUserName,currentUserEmail}= this.state;
        console.log(this.state);

        return (
            <div>
                <h3>Staff name: {currentUserName}</h3>
                <br></br>
                <p>email     : {currentUserEmail}</p>
            </div>
        );
    }
}

export default Staff;
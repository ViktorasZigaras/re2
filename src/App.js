import React from 'react';
import axios from 'axios';


export default class App extends React.Component {

    constructor() {
        super();
        this.state= {users: []}
    }


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const users = response.data;
                this.setState({users});
                console.log(response);
            })
    }

    render() {
        return (
            <ul style={{background:'yellow',padding:'40px',listStyle:'none'}}>
                {this.state.users.map(user => <li key={user.id}>{user.body}</li>)}
            </ul>
        );
    }





}
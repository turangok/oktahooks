import React, { useState } from 'react';
import ResourceListClass from './ResourceListClass';
import ResourceListHooks from './ResourceListHooks';
import UserList from './UserList';

let PostsAndTodos = () => {
    const [resource, setResource] = useState('posts');
        
        return (
        <div>
            <button onClick={() => setResource('posts')}>Posts</button>
            <button onClick={() => setResource('todos')}>Todos</button>
            <UserList resource={'users'}></UserList>
            <br></br>
            <ResourceListHooks resource={resource}></ResourceListHooks>
            
        </div>
    );
}

export default PostsAndTodos;


// class PostsAndTodos extends Component {
//     state = { elements: '' };


//     render() {
//         return (
//             <div>

//                 <button onClick={this.setState({ elements: 'myPosts' })}>Posts</button>

//                 <button onClick={() => { this.setState({ elements: 'myTodos' }) }}>Todos</button>

//                 <p>{this.state.elements}</p>
//             </div>
//         );
//     }
// }
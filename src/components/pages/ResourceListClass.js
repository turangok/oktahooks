import React, { Component } from 'react';
import axios from 'axios';

class ResourceListClass extends Component {
    state = { resources : []};

    async componentDidMount(abc){
        console.log('abc:',abc)
        const response = await axios.get(`https://Jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources : response.data});
    };

    async componentDidUpdate(prevProps){
        console.log('prevProps:',prevProps);
        console.log('prevProps.resource:');
        console.log(prevProps.resource);
        if (prevProps.resource !== this.props.resource) {

            console.log('props changed')    
            const response = await axios.get(`https://Jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources : response.data});

        } else {
            console.log('props are same')    
        }
    }
    render() {
        return (
            <div>
                {this.state.resources.length}
            </div>
        );
    }
}

export default ResourceListClass;
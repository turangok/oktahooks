import React, { Component } from 'react';
import axios from 'axios';

class ResourceListClass extends Component {
    constructor (props){
        console.log('tg..CONST')

        super(props);
        this.state = { resources : []};
    }
    

    async componentDidMount(abc){
        console.log('tg..CDM')

        console.log('abc:',abc)
        const response = await axios.get(`https://Jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources : response.data});
    };

    async componentDidUpdate(prevProps){
        console.log('tg..CDU')

        console.log('prevProps:',prevProps);
        console.log('prevProps.resource:');
        console.log(prevProps.resource);
        if (prevProps.resource !== this.props.resource) {

            console.log('props changed')    
            const response = await axios.get(`https://Jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources : response.data});
            console.log('new length:'+response.data.length)
        } else {
            console.log('props are same')    
        }
    }
    render() {
        console.log('tg..RENDER')
        return (
            <div>
                {this.state.resources.length}
            </div>
        );
    }
}

export default ResourceListClass;
import React from 'react';
import useResources from './useResources';



//const ResourceListHooks = (props) => {           //iki Alttaki satırın deconstruct kullanılmadanki hali. 
//resource = this.props.resource
const ResourceListHooks = ({ resource }) => {
    console.log('func:ResourceListHooks resource:') 
    console.log(resource)
    const resources = useResources(resource)
    return (
        <ul>
            {resources.length}
            {resources.map(record => { return <li key={record.id}>{record.title}</li> })}
        </ul>
    );

}

export default ResourceListHooks;
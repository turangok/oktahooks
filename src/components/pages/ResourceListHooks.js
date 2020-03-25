import axios from 'axios';

import React, {useState, useEffect} from 'react';

const ResourceListHooks= ({resource}) => {
    console.log('func:RESOURCELISTHOOKS:',resource);
    const [resources,setResources] = useState([]);

    const fetchResources = async () => {
        console.log('func:fetchResources')
        const response = await axios.get(`https://Jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);

    }

   
    useEffect(() => {
        fetchResources();
    }, []);

    return (
    <div>
        <h3>{resources.length}</h3>
    </div>
    )
}

export default ResourceListHooks;
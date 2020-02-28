import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    console.log('func userResources resource:', resource)
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://Jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
        console.log('func:fetchResources lengt:' + resources.length)
    };

    useEffect(() => {
        fetchResource(resource)
        console.log('func:useEffect lengt:' + resources.length)
    }, [resource]);

    return resources;

}

export default useResources;
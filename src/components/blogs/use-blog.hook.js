import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useBlog() {
    const [blog, setBlog] = useState([]);
    const handleGetBlogs = async () => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,{
                headers: {
                    "Content-Type": "application/json",
                },
            });
           
            setBlog(response.data);
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        handleGetBlogs();
    }, [])
    return {
        blog
    }
}

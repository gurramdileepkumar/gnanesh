import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import PostsApi from './PostsApi';
import Pagination from './Pagination'


export default function AxiosApi() {
     const[posts,setPosts] =useState([]);
     const [loading,setLoading]=useState(false);
     const [cuurentPage,setCurrentPage] = useState(1);
     const [postsInPage] = useState(50);
    useEffect(()=>{
        const Posts = async ()=>{
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setPosts(response.data);
            setLoading(false);
        }
        Posts();
    },[]);
    // console.log(posts);
    const indexOfLastPost = cuurentPage * postsInPage;
    const indexOfFirstPost = indexOfLastPost - postsInPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate =(pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div className="container">
      <PostsApi posts={currentPosts} loading={loading} />
      <Pagination
       postsInPage={postsInPage}
        totalPosts={posts.length} 
        paginate={paginate} />

      
    </div>
  )
}

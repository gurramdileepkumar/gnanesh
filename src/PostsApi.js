import React from 'react'

const PostsApi = ({posts,loading}) => {
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
        <div className="row">
            {posts.map(post=>{
                return(
                 <div className="col-sm-4">
                 <div className="card text-center mb-4">
                     <h4>{post.id}</h4>
                     <p className="text-muted">{post.name}</p>
                     <p className="text-danger">{post.email}</p>
                 </div>
             </div>
             )
            })}
           
        </div>
      
  )
}

export default PostsApi

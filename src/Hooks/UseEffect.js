import React,{ useEffect,useState } from 'react'

export default function UseEffect() {
    const [comments,setComments]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>res.json()).then((comments)=>{setComments(comments);
        })
    },[]
    )
  return (
    <div>
        
        <table border="1">
            <thead>
                <tr>
                    <th>POSTID</th>
                    <th>Id</th>
                    <th>name</th>
                    <th>EMAIL</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((data)=>
                <tr key={data}>
                    <td><img src={data.url} /></td>
                    {/* <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.body}</td> */}
                </tr>
                )}
            </tbody>
        </table>
      
    </div>
  )
}

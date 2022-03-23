import Recat from 'react'

class Api extends Recat.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            isLoading:false,
            isError:false,
            searchData:''
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true});
        const response = await 
              fetch('https://jsonplaceholder.typicode.com/posts')
            if(response.ok){
                const posts = await response.json()
                this.setState({posts,isLoading:false})
            }
            else{
                this.setState({isError:true,isLoading:false})
            }
    }
        renderTableHeader =()=>{
            return Object.keys(this.state.posts[0])
            .map((header)=><th key={header}>{header.toUpperCase()}</th>)
        }

        renderTableData =()=>{
            return this.state.posts.map((post)=>{
                return(
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )
            })
        }
         searchBar=(e)=>{
             this.setState({searchData:e.target.value});
         }

    render(){
     const {posts,isLoading,isError,searchData}=this.state;

     if(isLoading){
         return <div>Loading...</div>
     }
     if(isError){
         return <div>Error...</div>
     }
     return posts.length > 0 ?(
     <div>
         <br />
         <input 
         type="text"
         placeholder="search"
         value={searchData}
         onChange={this.searchBar}
         />
         <br />

     <table border="1">
         <thead>
             <tr>
                 {this.renderTableHeader()}
             </tr>
         </thead>
         <tbody>
             {this.renderTableData()}
         </tbody>
     </table>
     </div>
     ):(
         <div>
             <h1>No posts</h1>
         </div>
     )
    }
}
export default Api;
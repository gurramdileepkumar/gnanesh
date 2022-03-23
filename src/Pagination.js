import React from 'react'

const Pagination = ({postsInPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<= Math.ceil(totalPosts/postsInPage);i++){
            pageNumbers.push(i);
    }
  return (
    <div>
      <ul className="pagination">
          {pageNumbers.map(number =>{
              return <li key={number} className="page-item">
                  <a href='!#' className="page-link" onClick={()=>paginate(number)}>{number}</a>
              </li>
          })}
      </ul>
    </div>
  )
}

export default Pagination

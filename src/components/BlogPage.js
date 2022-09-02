import blogImg from "../images/Mask.png"
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from "react";

function BlogPage({blogPosts}) {

    const [postArray, setPostArray] = useState([])

    function handleClick(data) {
        setPostArray(blogPosts.slice((data.selected + 1), (data.selected + 1) + 8))
    }

    useEffect(() => {
        setPostArray(blogPosts.slice(1, 9))
    },[])

    return (
        <div className="post-page-container">
        <div className="blogPosts-page">
            {
                postArray.map((post) => {
                    const date = post.updated_at.split("T")[0].split("").reverse().join("")
                    return (
                        <div key={post.id} className="post">
                            <img className="post-img" src={blogImg}></img>
                            <p className="post-cat">{post.category.name}</p>
                            <p className="post-date">{date}</p>
                            <div className="title-and-cont">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-cont">{post.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="pagination-div">
        <ReactPaginate 
            previousLabel={""}
            nextLabel={"Volgende Pagina →"}
            breakLabel={"..."}
            pageCount={blogPosts.length / 8}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            onPageChange={handleClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link orange"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active-num"}
        />
        </div>
    </div>
    )
}

export default BlogPage
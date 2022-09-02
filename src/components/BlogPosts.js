import blogImg from "../images/Mask.png"

function Blogposts({blogPosts, goTo}) {
    return (
        <div className="posts-container">
            <div className="blogPosts">
                {
                    blogPosts.slice(0,4).map((post) => {
                        const date = post.updated_at.split("T")[0].split("").reverse().join("")
                        return (
                            <div key={post.id} className="post">
                                <img className="post-img" src={blogImg}></img>
                                <p className="post-cat">{post.category.name}</p>
                                <p className="post-date">{date}</p>
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-cont">{post.content}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={goTo} name="blog" className="btn load-btn">Meer laden</button>
        </div>
    )
}

export default Blogposts
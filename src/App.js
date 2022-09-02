import Form from "./components/Form";
import { useState, useEffect } from "react"
import headerImg from "./images/background.png"
import logoImg from "./images/socialbrothers.png"
import Blogposts from "./components/BlogPosts";
import BlogPage from "./components/BlogPage";

function App() {

  const [post, setPost] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [isRendered, setIsRendered] = useState(false)
  const [page, setPage] = useState("home")

  // console.log(blogPosts);

  const [selectedCat, setSelectedCat] = useState([]);

  function handleChange(event) {
      setSelectedCat(event.target.value);
  };
  
  useEffect(() => {
    const getOptions = {
      method: "GET",
      headers : {
          token: "pj11daaQRz7zUIH56B9Z"},
    }
    fetch("https://frontend-case-api.sbdev.nl/api/posts?perPage=200", getOptions)
    .then(response => response.json())
    .then(data => setBlogPosts(data.data))
  },[isRendered])

  useEffect(() => {
    const getOptions = {
      method: "GET",
      headers : {
          token: "pj11daaQRz7zUIH56B9Z"},
    }
    fetch("https://frontend-case-api.sbdev.nl/api/categories", getOptions)
    .then(response => response.json())
    .then(data => console.log(data))
  },)

  function submitForm(event) {
    event.preventDefault()
    let data = new FormData(event.target) 
    data.append("title", data.get("title"))
    data.append("category_id", selectedCat)
    data.append("content", data.get("content"))
    data.append("image", data.get("image"))
    setPost(data)
  }
  
  useEffect(() => {
    const postOptions = {
      method: "POST",
      headers : {
          token: "pj11daaQRz7zUIH56B9Z"},
      body: post
    }
    fetch("https://frontend-case-api.sbdev.nl/api/posts", postOptions)
    .then(response => response.json())
    .then(() => setIsRendered(prev => !prev))
  }, [post])

  function goTo(event) {
    setPage(event.target.name)
  }

  function renderPage() {
    return (
      page === "home" ?
      <main>
        <Form submit={submitForm}
              handleChange={handleChange}
              selectedCat={selectedCat}
        />
        <Blogposts 
              blogPosts={blogPosts} 
              goTo={goTo}
        /> 
      </main> 
      :
      <main>
        <BlogPage
              blogPosts={blogPosts} 
               />
      </main>
    )
  }

  return ( 
    <div className="app-container">
      <header className="App-header">
        <img className="header-bg-img" src={headerImg}></img>
        <img className="logo-img" src={logoImg}></img>
        <a onClick={goTo} name="home" className="route home-route" href="#">Home</a>
        <a onClick={goTo} name="blog" className="route blog-route" href="#">Blog</a>
      </header>
        {renderPage()}
    </div>    
  );
}

export default App;

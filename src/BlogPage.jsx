import Header from "./Header";
import Footer from "./Footer";
import { Info } from "./content.jsx";
import { useContext,useState, useEffect } from "react";
import Spinner from "./Spinner";
import { Navigate, useNavigate } from "react-router-dom";
import Post from "./Post";

export default function BlogPage(){
    const {loading,setLoading} = useContext(Info);
    const [blog,setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const blogId = location.pathname.split('/').at(-1)
    const navigate = useNavigate();

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data= await res.json();
            
            setBlog((prev)=>data.blog);
            setRelatedBlogs((prev)=>data.relatedBlogs)
        }
        catch{
            console.log('Error occured in BlogPage');
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId) fetchRelatedBlogs();
    },[location.pathname])

    return (
        <div>
            <Header/>
            <div className="w-full h-auto max-w-[600px] mx-auto mt-[6rem] mb-[6rem]">
                    
                {
                    loading ? 
                    (<Spinner/>) :
                    blog ?
                    (
                        <div>
                    <div>
                    <button onClick={()=>navigate(-1)} className="rounded border-solid border-[1px] px-[10px] py-[5px] border-black border-opacity-20">Back</button>
                    </div> 
                    <Post 
                    title={blog.title} 
                    date={blog.date} 
                    author={blog.author} 
                    category={blog.category} 
                    content={blog.content} 
                    tags={blog.tags} /> 
                    <div>
                        <div className="text-[1.7rem] my-6 font-bold">Related Blogs</div>
                    {
                        relatedBlogs.map((ele)=>(
                            <Post 
                            title={ele.title} 
                            date={ele.date} 
                            author={ele.author} 
                            category={ele.category} 
                            content={ele.content} 
                            tags={ele.tags} /> 
                        ))
                    }
                    </div>
                    </div>) :
                    (<div className="text-[4rem]">
                        NO BLOG FOUND
                    </div>)
                    
                }
                
            </div>
            <Footer/>
        </div>
    )
}
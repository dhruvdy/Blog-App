import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {Info} from './content.jsx';
import {useContext} from 'react';
import Post from './Post.jsx';
import Spinner from "./Spinner";

export default function CategoryPage(){
    const navigate = useNavigate(); 
    const back = ()=> navigate(-1);
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replace('-',' ');
    const {posts,loading} = useContext(Info);
    return (
        <div>
            <Header/>
            <div className="w-full h-auto max-w-[600px] mx-auto mt-[6rem] mb-[6rem]">
                <div>
                    <div className="flex items-center justify-start gap-2">
                        <button onClick={back} className="rounded border-solid border-[1px] px-[10px] py-[5px] border-black border-opacity-20">Back</button>
                        <div className="text-[1.1rem]" >Blogs on
                            <span className="underline ml-[5px] font-medium text-[1.3rem] ">{category}</span>
                        </div>
                    </div>
                    {/* {
                        console.log(posts)
                    } */}
                    {
                        loading ? <Spinner/> :
                        posts.map(
                        (post,index)=>{
                            return (<Post
                                key = {index} 
                                title={post.title} 
                                date={post.date} 
                                author={post.author} 
                                category={post.category} 
                                content={post.content} 
                                tags={post.tags} />)
                        }
                    )
                
                    }
                </div>
                
            </div>
            <Footer/>
        </div>

    )
}
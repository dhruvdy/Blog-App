import {Info} from './content.jsx';
import {useContext} from 'react';
import Post from './Post.jsx';

export default function Posts(){
    const {posts} = useContext(Info);
    return (
        <div className="w-full h-auto max-w-[600px] mx-auto mt-[6rem] mb-[6rem]">
            {
                posts.map(
                    (post)=>{
                        return (<Post
                            key={post.id}
                            id={post.id} 
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
    )
}
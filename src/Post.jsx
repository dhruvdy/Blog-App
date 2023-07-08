import {NavLink} from 'react-router-dom'

export default function Post({title,author,category,date,content,tags,id}){
    return (
        <div className=" text-left mb-[1rem]">
            <h1 className=" font-bold text-[1.2rem] hover:underline hover:cursor-pointer">
                    <NavLink to={`/blogs/${id }`}>{title}</NavLink>
            </h1>
            <p className=" text-sm ">By <span className="italic">{author}</span> on 
                <span className=" font-medium underline cursor-pointer ">
                    <NavLink to={`/categories/${category.replaceAll(' ','-')}`}>{category}</NavLink></span></p>
            <p className="text-sm">Posted on {date}</p>

            <p className="mt-4 mb-2">{content}</p>
            <div className="flex gap-2">
                {
                    tags.map((tag,index)=>{
                        return <div key={index} className="text-blue-800 underline text-[0.7rem] font-bold cursor-pointer" >
                            <NavLink to={`/tags/${tag.replaceAll(' ','-')}`}>{`#${tag}`}</NavLink>
                            </div>
                    })
                }
            </div>
        </div>
    );
}
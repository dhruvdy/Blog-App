import {createContext,useState} from 'react';
import { baseUrl } from './baseUrl';
import { useLocation, useNavigate } from 'react-router-dom';

export const Info = createContext();

export default function Variables ({children}){
    const [loading,setLoading] = useState(false);
    const [page,setPage] =useState(1);
    const [totalPage,setTotalPage] = useState(null);
    const [posts , setPosts] = useState([]);
    const location = useNavigate();

    async function fetchData(page,category=null,tag=null){
        setLoading(true);
        try{
            let url = `${baseUrl}?page=${page}`;
            if(tag) url += `&tag=${tag}`
            if(category) url += `&category=${category}`
            const res = await fetch(`${url}`);
            const data = await res.json();
            setPage(data.page);
            setTotalPage(data.totalPages)
            setPosts(data.posts)

        }
        catch(e){
            console.log('Problem in fetching data');
        }
        setLoading(false);

    }
    function next(){
        location({search:`?page=${page+1}`});
    }
    function previous(){
        location({search:`?page=${page-1}`});
    }
    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchData,
        next,
        previous
       }

       return (<Info.Provider value={value}>
       {children}
   </Info.Provider>)

       

}
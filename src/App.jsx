import { useState , useContext , useEffect} from 'react';
import Posts from './Posts.jsx'; 
import './App.css';
import Spinner from './Spinner.jsx';
import { Route, useLocation,useSearchParams } from 'react-router-dom';
import Home from './Home.jsx';
import {Routes} from 'react-router-dom'
import {Info} from './content.jsx';
import BlogPage from './BlogPage.jsx';
import TagPage from './TagPage.jsx';
import CategoryPage from './CategoryPage.jsx';

function App() {
  const {fetchData} = useContext(Info);
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();
  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes('tags')) {
      const tag= location.pathname.split('/').at(-1).replace('-',' ');
      fetchData(Number(page),null,tag);
    }
    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page),category,null);
    }
    else{
      fetchData(Number(page))
    }
    },[location.pathname, location.search])
  return (
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs/:blogID' element={<BlogPage/>} />
      <Route path='/tags/:tagID' element={<TagPage/>} />
      <Route path='/categories/:category' element={<CategoryPage/>} />
    </Routes>
  )
}

export default App

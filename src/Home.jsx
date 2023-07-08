import { useState , useContext , useEffect} from 'react';
import Posts from './Posts.jsx'; 
import './App.css';
import {Info} from './content.jsx';
import Spinner from './Spinner.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx'

export default function Home(){
    const {fetchData,loading} = useContext(Info);
  useEffect(()=>{
    fetchData();
  },[])
    return (
        <div className="text-center w-[100vw] h-[100vh] overflow-x-hidden">
        <Header/>
        {
          loading ? 
          <Spinner/>:
          <Posts className='w-full h-auto max-w-[600px] mx-auto mt-[6rem] mb-[6rem]' />
        }
        <Footer/>
      </div>
    )
}
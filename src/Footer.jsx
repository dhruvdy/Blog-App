import { useContext } from 'react';
import {Info} from './content.jsx';
export default function Footer(){
    const {page, totalPage, previous, next} = useContext(Info);
    return (
        <div className='w-full shadow-[0_-2px_20px_rgb(0,0,0,0.3)] bottom-0 left-0 right-0 fixed bg-white'>
          <div className='flex py-[0.5rem] mx-auto max-w-[600px] justify-between'>
            <div className='flex gap-4'>
              {
                page>1 && (
                  <button onClick={previous} className='rounded border-solid border-[1px] px-[10px] py-[5px] border-black border-opacity-20'>Previous</button>
                )
              }
              {
                page<totalPage && (
                  <button onClick={next} className='rounded border-solid border-[1px] px-[10px] py-[5px] border-black border-opacity-20'>Next</button>
                )
              }
              
            </div>
            <div className='font-bold'>
              Page <span>{page}</span> of <span>{totalPage}</span>
            </div>
          </div>
        </div>
    )
}
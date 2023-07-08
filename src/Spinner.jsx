import './Spinner.css'

export default function Spinner(){
    return (
        <div className=' text-[2rem] font-semibold h-full w-full flex flex-col justify-center items-center'>
            {/* <div className="lds-ripple border-black text-black"><div></div><div></div></div> */}
            Loading...
        </div>
    )
}
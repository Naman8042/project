import Navbar from './Navbar'
import donation from './donation.png'
import Footer from './Footer'
import equipments from './equipments.jpg'
import chemist from './chemisr.png'
import donateequip from './donateequipments.png'
import donate from './donate.png'
import Chatbotpng from './chatbot.png'
import { Link } from 'react-router-dom'
export default function Home(){
    return(
    <>
    <Navbar/>
     <div className='overflow-x-hidden w-full'>
        <div className='min-h-screen flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center w-full'>
        <img src={donation} alt="hello" className='h-80 w-80' />
        </div>
        <span className=' md:text-5xl font-bold text-2xl'>Welcome to  
        <span className='ml-1 text-amber-400 font-bold'>MedCareDonor</span></span>
        <div className='flex justify-center items-center md:text-3xl text-xl mt-[1%] mb-[2%] font-medium'>
            "Donate Medicines,Saves Lifes... "
        </div>
        </div>
        <div className='fixed left-[94%] top-[89%]'>
            <Link to="search"> <img src={Chatbotpng} atl="" className='h-16 w-16 object-contain '/></Link>
        </div>
        <div className='flex justify-center items-center text-3xl mt-10 md:mt-0 md:text-4xl m-[1%]'> 
        Our Services 
        </div>
        <div className='flex justify-center items-center flex-wrap w-full  gap-[4%]'>
        <Link to="/donateequipments">
        <div className='bg-skyblue flex flex-col justify-center items-center border-8 border-transparent rounded-2xl '>
            <img src = {chemist} alt='hello' className='w-80 h-80'/>
            <h1 className='text-2xl p-[3%]'>Buy/Sell Medicine?</h1>

        </div>
        </Link>
        <Link to="/donateequipments">
        <div className=' bg-skyblue flex flex-col border-8 border-transparent justify-center items-center  rounded-2xl m-[0.5%]'>
            <img src = {donate} alt='hello' className='w-80 h-80'/>
            <h1 className='text-2xl p-[3%]'>Donate Medicine?</h1>

        </div>
        </Link>
        
        <Link to="/piyush">
        <div className='bg-skyblue flex flex-col border-8 border-transparent justify-center items-center rounded-2x1 m-[0.5%]'>
            <img src = {equipments}  alt='hello' className='w-80 h-80'/>
            <h1 className='text-2xl p-[3%]'>Donate Medical Equipments?</h1>

        </div>
        </Link>

        </div>
        
        <Footer/>
        </div>
 
    </>   
    )
}
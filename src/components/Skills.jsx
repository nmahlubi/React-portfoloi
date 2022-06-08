import React from 'react'
import logo0 from '../assets/1631110818-logo-react-js.png'
import logo1 from '../assets/download (1).png'
import logo2 from '../assets/download (2).png'
import logo3 from '../assets/download (3).png'
import logo5 from '../assets/download (5).png'
import logo6 from '../assets/download (6).png'
import logo7 from '../assets/download (7).png'
import logo8 from '../assets/download (8).png'
import logo9 from '../assets/download (9).png'
import logo11 from '../assets/download (11).png'
import logo12 from '../assets/download (12).png'
import logo13 from '../assets/download (13).png'
import logo14 from '../assets/images.png'
import logo155 from '../assets/download (155).png'
import logo from '../assets/IegUPpg-_400x400.jpg'

const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-screen bg-[#142c31] text-gray-300 '>
    {/**Container */}

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600  '>Skills and Technologies</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gao-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo9} alt='HTML icon'></img>
                    <p className='my-4'>FLUTTER</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo0} alt='HTML icon'></img>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo1} alt='HTML icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo2} alt='HTML icon'></img>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo3} alt='HTML icon'></img>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo14} alt='HTML icon'></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo5} alt='HTML icon'></img>
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo155} alt='HTML icon'></img>
                    <p className='my-4'>SOURCETREE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo} alt='HTML icon'></img>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo13} alt='HTML icon'></img>
                    <p className='my-4'>POSTMAN</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo7} alt='HTML icon'></img>
                    <p className='my-4'>SEO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={logo11} alt='HTML icon'></img>
                    <p className='my-4'>C#</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
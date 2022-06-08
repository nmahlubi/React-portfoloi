import React from 'react'
import work1 from '../assets/altumcode-dMUt0X3f59Q-unsplash.jpg'
import work2 from '../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'
import work3 from '../assets/kristin-wilson-z3htkdHUh5w-unsplash.jpg'
import work4 from '../assets/deniz-altindas-t1XLQvDqt_4-unsplash.jpg'
import work5 from '../assets/sunguk-kim-JhqBxsORuXA-unsplash.jpg'

const Work = () => {
  return (
    <div name = 'work' className=' w-full h-md: h-screen text-gray-300 bg-[#142c31]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
            <p className='py-6'>My work experience in here..</p>
        </div>

        {/**Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {/**Grid Item */}
            <div style={{backgroundImage:`url(${work3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/**Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                    Flutter Application
                    </span>
                    <div className='pt-8 text-center '>

                    <a href='https://github.com/nmahlubi/admin_portal'>
                    <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>

                    <a href='https://github.com/nmahlubi/admin_portal'>
                    <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                    
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${work4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/**Hover effects */}
    <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-pink-600 tracking-wider'>
        React js Application
        </span>
        <div className='pt-8 text-center '>

        <a href='https://github.com/nmahlubi/portfolio-react-app'>
        <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
        </a>

        <a href='https://github.com/nmahlubi/portfolio-react-app'>
        <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
        </a>
        
        </div>
    </div>
</div>

            <div style={{backgroundImage:`url(${work2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/**Hover effects */}
    <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-pink-600 tracking-wider'>
        Flutter Application
        </span>
        <div className='pt-8 text-center '>

        <a href='https://github.com/nmahlubi/weather_assessment'>
        <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
        </a>

        <a href='https://github.com/nmahlubi/weather_assessment'>
        <button className='text-center rounded-lg px-4 py -3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
        </a>
        
        </div>
    </div></div>
        </div>
    </div>
    </div>
  )
}

export default Work
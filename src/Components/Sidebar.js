import React, {useState} from 'react'
import { motion } from 'framer-motion';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const routes = [
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
    {
        path: '/',
        name: 'Home',
        icon: <PanoramaFishEyeIcon/>
    },
]

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

  

  return (
      <>
      
   
     <motion.div 
     animate ={{ width: '50px'}} 
     className='sidebar'>

     <div className="top_section">
        {isOpen && <h1 className='logo'></h1> }

     </div>
        <section className='routes'>
          {routes.map ((route) => (
            <NavLink
                     to={route.path} 
                     key={route.name} 
                     className='link'>
                <div className='link_text'>{route.icon} <br /> {route.name}</div>
               
            </NavLink>
          ))}
        </section>
     </motion.div>
     
     <main>
        {children}
     </main>
    </>
  )
}

export default Sidebar
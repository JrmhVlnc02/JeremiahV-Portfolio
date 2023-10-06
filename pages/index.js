//next image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion'


//variants
import {fadeIn} from '../variants'
import ProjectsBtn from "../components/ProjectsBtn";


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
    {/* {Text} */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        
        {/* title */}
        
        <motion.h3 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h3 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-0 xl:mb-0 xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl mt-10">
        Hello, my name is
        </motion.h3>

        <motion.h1 variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="h1 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-0 xl:mb-0 xl:text-6xl lg:text-6xl md:text-4xl">
        <span className="text-accent"> Jeremiah</span>!
        
        </motion.h1>

        <motion.h3 variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="h3 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-2xl lg:text-2xl md:text-1xl sm:text-xl">
        I build websites, develop web and mobile applications, and do graphic design.
        </motion.h3>

        {/* subtitle */}
        {/* <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa sed. Leo integer malesuada nunc vel.
        </motion.p> */}
        {/* btn */}

        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        
        <motion.div variants={fadeIn('down', 0.8)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
          <ProjectsBtn/>
        </motion.div>
        </div>
      
    
    </div>


    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
    
    {/* bg Image */}
    <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
    
    </div>

    {/* particles */}
    <ParticlesContainer/>
    {/* avatar img */}
    <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease: 'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
      <Avatar/>  
    </motion.div>
    
    
    </div>
    
  </div>
  );
};

export default Home;



//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import ParticlesContainer from '../../components/ParticlesContainer';

//framer motion
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
     <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex  xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0 mt-2'>
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 xl:mt-12'>
            See my <span className='text-accent'>work</span>.
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-1 max-w-[400px] mx-auto lg:mx-0'>
              
            </motion.p>
          </div>
        
        <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
        {/* particles */}
            <ParticlesContainer/> 
        {/* slider */}
        <WorkSlider/>
        
        </motion.div>

        
        </div>
        
      </div>
      <Bulb />     
  </div>);
};

export default Work;

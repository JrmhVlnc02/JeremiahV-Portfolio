import React, {useState} from 'react'; 


import ParticlesContainer from '../../components/ParticlesContainer';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  
} from "react-icons/fa";

import {
  SiNextdotjs,
  
  SiAdobexd,
  SiAdobephotoshop,
  SiCarrd,
  SiMysql,
  SiAdobeillustrator,
  SiFlutter,
  SiAndroidstudio,
  SiPython,
  SiCsharp,
  SiDart,
  SiVisualbasic,
  SiCplusplus,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={2}/>,
          <FaJs key={3}/>,
          <FaPhp key={4}/>,
          <SiMysql key={5}/>,
          <FaReact key={6}/>,
          <SiNextdotjs key={7}/>,
          <FaWordpress key={8}/>,
          <SiCarrd key={9}/>,
          
        ],
      },
      {
        title: 'Mobile Development',
        icons: [
          <SiFlutter key={1}/>,
          <SiDart key={2}/>,
          <SiAndroidstudio key={3}/>,
          
          
        ],
      },

      
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1}/>, <SiAdobexd key={2}/>, <SiAdobephotoshop key={3}/>, <SiAdobeillustrator key={4}/>],
      },

      {
        
        title: 'Programming Languages',
        icons: [
          <SiPython key={1}/>,
          <SiCsharp key={2}/>,
          <SiCplusplus key={3}/>,
          <SiVisualbasic key={4}/>,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Academic Excellence Awardee',
        stage: '2023',
      },
       {
        title: 'Deans Lister Awardee',
        stage: '2020 - 2023',
      },
      {
        title: 'CICT Systems Fair 2023 - 3rd Place',
        stage: '2023',
      },
      {
        title: 'C# Competition - 2nd Place',
        stage: '2022',
      },
      {
        title: 'With Honor',
        stage: '2019',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: '(Intern) Regional Communications and Electronics - NCR',
        stage: '2023',
      },
      {
        title: 'Freelance - Virtual Assistant',
        stage: '2017 - 2020',
      },
      
    ],
  },
  
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return ( 
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial='hidden' 
      animate='show' 
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>

        <Avatar />
        
      
      </motion.div>
      <div className='container mx-auto mt-10 h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
        
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 mb-1'>About<span className='text-accent'>.</span>
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='h4 max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0'>
          Hey, my name is Jeremiah Valencia. I’m a UX/UI designer and front-end web and mobile developer from the Philippines. My expertise in coding, problem-solving, and staying up-to-date with the latest industry trends makes me a valuable asset.
          </motion.p>
          
        </div>
        
        <motion.div variants={fadeIn('left', 0.8)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='h4x flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-1'>

            {aboutData.map((item, itemIndex) =>{
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}

                >
                
                  {item.title}
                
                </div>

              );
          })}
          </div>
          
          
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {/* particles */}
            <ParticlesContainer/> 
            {aboutData[index].info.map((item, itemIndex) =>{
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/* title */}
                  <div className='h5 xl:text-xl font-light mb-1 md:mb-0'>{item.title}</div>  
                  <div className='hidden md:flex'>-</div>
                  <div className='h5 xl:text-xl mb-0'>{item.stage}</div>
                  <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons ?.map((icon, itemIndex) => {
                    return (
                      <div key={itemIndex} className='h4'>{icon}</div>
                      
                    );
                  })}
                  </div>
              </div>
              );
               
            })}
          </div>
        </motion.div>
      </div>
      
    </div> 
  );
};

export default About;

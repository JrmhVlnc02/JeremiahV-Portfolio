import Link from "next/link";

import {RiLinkedinFill, RiFacebookLine, RiInstagramFill,} from 'react-icons/ri';

import {
  
  FaFileDownload,
} from "react-icons/fa";


const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/jrmh-valencia'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>

      <Link href={'https://www.facebook.com/jrmh02vlnc/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>

      <Link href={'https://www.instagram.com/jrmh.vlnc/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramFill />
      </Link>

      <Link href={'/Jeremiah-Valencia-CV.pdf'} download className="hover:text-accent transition-all duration-300">
        <FaFileDownload />
      </Link>

    
    </div>
  );
  
};

export default Socials;

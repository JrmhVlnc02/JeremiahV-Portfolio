//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs"

//framer
import {motion} from 'framer-motion'

//variants
import { fadeIn } from "../../variants";


const Contact = () => {

  // async function handleOnSubmit(e) {
  //   e.preventDefault();
  //   const formData = {}
  //   Array.from(e.currentTarget.elements).forEach(field => {
  //     if (!field.name) return;
  //     formData[field.name] = field.value;
  //   });
    
  //   console.log(formData);
  // }

  



  return (

    <div className="h-full bg-primary/30 ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h1 text-center mb-2 mt-8">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>

          {/* form */}
          <form className="flex-1 flex flex-col gap-2 w-full mx-auto" action="https://formsubmit.co/c84533b2a88751d9764d44576b2419aa" method="POST" >
          {/* input group */}
            <div className="flex gap-x-2 w-full">
              <input type="text" placeholder="full name" required className="input"/>
              <input type="text" placeholder="email" required className="input"/>
            </div>
            <input type="text" placeholder="subject" required className="input"/>
             <textarea type="text" placeholder="message" required className="textarea"></textarea>
             {/* button */}

             <button className="btn rounded-full border border-white/50 max-w-[150px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group" download>
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">

                Submit
                
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
             </button>
          </form>

        </div>

        

      </div>
    
    

    </div>

    
  
  );
};

export default Contact;
 
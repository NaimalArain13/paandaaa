import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaXTwitter  } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
export default function Header() {
  return (<div className="bg-yellow-100 relative flex justify-between items-center pl-5 pr-3 p-1">
      <div className="flex-shrink-0">
      <Image src={"/bg2.jpg"} alt="" width={43} height={43}
      className="bg-[#CAA0DB]"/></div>
     
        
      
      <div className="space-x-5 text-lg ">
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Services</Link>
        <Link href="/">Work</Link>
      </div>

      
      <div className="flex space-x-3">
          <Link href='/' 
          className="hover:text-blue-600">
            <FaFacebook  size={20}/>
          </Link>
          <Link href='/'
          className="gray-950">
          <FaXTwitter size={20}/>
          </Link>
          <Link href='/' 
          className="hover:text-blue-950">
            <FaLinkedin size={20}/>
          </Link>
          <Link href='/' 
          className="hover:bg-gradient-to-tr hover:text-[#9646b6] hover:from-[hsl(313,75%,55%)] ">
            <FaInstagram size={20}/>
          </Link>
       
      </div>
      {/* <Link href="mailto:panda@info.com">
        <MdEmail size={28} />
      </Link> */}
    </div>
    
  );
}

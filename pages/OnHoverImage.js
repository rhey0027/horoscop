import Image from "next/image";
import { useState } from 'react';


const OnHoverImage  = ({hoveredImage, image, alt }) => {
      const [hover, setHover] = useState(false);
      console.log(image);
      return (
            <div onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} className="cursor-pointer w-14 h-14 pt-4 animate-ping">      
            {hover ? (
                  <Image src={image} 
                  alt={alt} className="rounded-full " />
            ) : (
                  <Image src={hoveredImage} alt={alt} className="rounded-full " />
            )}
           </div>
       );
}
 
export default OnHoverImage;
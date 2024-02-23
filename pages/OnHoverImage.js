import Image from "next/image";
// import { useState } from 'react';


const OnHoverImage  = ({hoveredImage, image, alt }) => {
      // const [hover, setHover] = useState(false);
      console.log(image);
return (
      <div className="cursor-pointer absolute top-80 md:top-[420px]"
      > 
            <Image 
            src={hoveredImage} 
            alt={alt} 
            className="rounded-full"
            width={100}
            height={100}
            />

{/* // onMouseLeave={() => setHover(false)}        */}
{/* onMouseEnter={() => setHover(true)} */}
{/* {hover ? (
) : (
<Image src={hoveredImage} alt={alt} className="rounded-full " />
)} */}
      </div>
       );
}
 
export default OnHoverImage;
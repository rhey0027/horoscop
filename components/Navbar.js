import One from '../public/profile1.jpg'
import Two from '../public/profile2.jpg'
import Link from "next/link";
import  OnHoverImage from '../pages/OnHoverImage';

const Navbar = () => {

      const arrayOfImages = [{ hoverImage: One, image: Two, alt: "Photo One"},];

      return (
            <div className="flex flex-col justify-center items-center text-white">
                 {arrayOfImages.map((el) =>(
                        <OnHoverImage alt={el.alt}
                        hoveredImage={el.hoverImage}
                        image={el.image}
                        key={""}
                         />
                 ))}
                 <div className='pt-10 text-center pb-5'>
             <h1 className='uppercase'>Feel free to use this App just for fun</h1>
                  <p className='pb-5 text-violet-400'>Where do you want to go today?</p>
                  <div className='flex text-black font-bold'>
                        <p className='bg-green-600 text-blue-200 p-1 px-4 mr-4 rounded-lg link_google links'><a href="https://google.com"target="_blank">Google</a></p>
                        <p className='bg-blue-500 text-white p-1 px-4 mr-4 rounded-lg link_fb links'><a href="https://facebook.com"target="_blank">Facebook</a></p>
                        <p className='bg-orange-400 text-white p-1 px-4 mr-4 rounded-lg link_gmail links'><a href="https://gmail.com"target="_blank">Gmail</a></p>
                        <p className='bg-red-500 text-white p-1 px-4 rounded-lg link_youtube links'><a href="https://youtube.com"target="_blank">Youtube</a></p>
                  </div>
                 </div>
            </div>
            
      );
}
 
export default Navbar;

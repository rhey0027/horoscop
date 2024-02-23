import One from '../public/zodiac.png'
import Link from "next/link";
import  OnHoverImage from '../pages/OnHoverImage';

const Navbar = () => {

      const arrayOfImages = [{ hoverImage: One, alt: "Photo One"},];

  return (
    <>
        {/* <div className="mx-5 flex flex-col justify-center items-center">
          {arrayOfImages.map((el) => (
            <OnHoverImage
              alt={el.alt}
              hoveredImage={el.hoverImage}
              image={el.image}
              key={""}
            />
          ))}
        </div> */}
          <div className="p-10 md:text-2xl text-center text-white">
            <h1 className="uppercase">
              Wanna know if you will have a good day or a bad day
            </h1>
            <p className="pb-5 text-violet-400 md:pt-10">
              Navigate below and choose your preferred sign...
            </p>
            <div className="flex items-center justify-center text-black lg:justify-center">
              <p className="bg-green-600 text-blue-200 px-4 py-1 rounded-lg link_google links mx-2">
                <a href="https://google.com" target="_blank">
                  Google
                </a>
              </p>
              <p className="bg-blue-500 text-white p-1 px-4 rounded-lg link_fb links mx-2">
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </p>
              <p className="bg-orange-400 text-white p-1 px-4 rounded-lg link_gmail links mx-2">
                <a href="https://gmail.com" target="_blank">
                  Gmail
                </a>
              </p>
              <p className="bg-red-500 text-white p-1 rounded-lg link_youtube links mx-2">
                <a href="https://youtube.com" target="_blank">
                  Youtube
                </a>
              </p>
            </div>
          </div>
    </>    
  );
}
 
export default Navbar;

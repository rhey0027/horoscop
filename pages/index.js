import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { initFlowbite } from "flowbite";
import Head from "next/head";


export default function Home() {
  const astroSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const [astroData, setAstroData] = useState([]);
  const [astroSignClass, setAstroSignClass] = useState("opacity-0, hidden");
  const [selectMenuClass, setSelectMenuClass] = useState();

  const apiUrl = "https://horoscope-astrology.p.rapidapi.com/";
  const apiHeaders = {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": process.env.apiKey,
    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
  };

  const getAstroData = async (page, sign) => {
    if (page === "sign") {
      const options = {
        method: "GET",
        url: apiUrl + page,
        params: { s:sign },
        headers: apiHeaders
      }
      try {
        const response = await axios.request(options);
        setAstroData(response.data);
      } catch (error) {
        console.log(err)
      }
    }
  };

  const showAstro = (sign) => {
    if (sign) {
      getAstroData("sign", sign);
      setSelectMenuClass(
        "translate-y-20 ease-out duration-500 delay-300 scale-0 hidden")
      setAstroSignClass(
        "translate-y-20 ease-in duration-500 delay-300 opacity-100")
    }
  }
  const hideAstro = () => {
    setSelectMenuClass(
      "translate-y-1 ease-in duration-500 delay-300 scale-100")
    setAstroSignClass(
      "translate-y-1 ease-out duration-500 delay-300 opacity-0 hidden")
  }
  return (
    <>
    {/* head section for meta data */}
    <Head>
      <title>Horoskop | Casa</title>
      <meta name="keywords" content="Mi dia Horoskop" />
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
    </Head>

    {/* main body */}
  <main className="container-md flex flex-col items-center justify-between">
      <div id="selectAstroSign"className={`z-20 absolute top-[200px] w-[350px] md:w-[450px] mt-3 backdrop-blur-md md:mt-10 bg-violet-400 rounded-lg p-6 ${selectMenuClass}`}>
        <select onChange={(e) => showAstro(e.target.value)}className="cursor-pointer w-full text-center rounded-md p-2 text-lg text-black">
          <option className="bg-violet-200 " value="" id="0">Choose your lucky charm</option>
          {astroSigns?.map( (item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <option className="bg-violet-200" value={item.toLocaleLowerCase()} id={index} >{item}</option>
              )
          })
        }
        </select>
      </div>
    <div className= {`w-full px-5 z-20 absolute top-[95px] rounded-xl bg-center md:top-[150px] md:w-[600px] lg:w-1/2 ${astroSignClass}`}>
      <div className="rounded-lg bg-slate-200 text-center text-black 
      mt-5 p-5 opacity-90">
      <button onClick={() => hideAstro()}className="z-30 absolute right-8 top-10 ">
            <svg width="25" height="25"xmlns="http://www.w3.org/2000/svg"className="h-5 w-5 text-slate-200 rounded-full bg-gray-400 p-1"fill="none"viewBox="0 0 24 24"stroke="currentColor">
              <g><path stroke-linecap="round"stroke-linejoin="round"stroke-width="4"d="M6 18L18 6M6 6l12 12"/></g>
            </svg>
          </button>
        <div id="carousel" className="p-5 z-20 relative w-full" data-carousel="static">
          <div className="relative h-[480px] overflow-y-auto overflow-hidden rounded-lg">
          {astroData &&
            <>
            <div className="hidden duration-500 ease-in-out" data-carousel-item>
                <div className="absolute px-5 w-full h-full top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                    <p className="text-sm mt-2">{astroData.date_range}</p>
                    <p className="text-sm">Your element is {astroData.element} with {astroData.symbol} symbol</p>
                    <h2 className="mt-5 text-lg text-blue-800 font-bold">About</h2>
                    <div className="text-sm text-justify">{astroData.about}</div>
                </div>
            </div>

              <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full  h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Career</h2>
                  <div className="text-sm text-justify">{astroData.career}</div>
                </div>
              </div>
            
             <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Strengths</h2>
                  <div className="text-sm text-justify">{astroData.strengths}</div>
                </div>
              </div>

              <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Weaknesses</h2>
                  <div className="text-sm text-justify">{astroData.weaknesses}</div>
                </div>
              </div>

              <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Compatibility</h2>
                  <div className="text-sm text-center">{astroData.compatibility}</div>
                </div>
              </div>

              <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Love</h2>
                  <div className="text-sm text-justify">{astroData.love}</div>
                </div>
              </div>

              <div className="hidden duration-500 ease-in-out" data-carousel-item>  
                <div className="absolute w-full h-full block px-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <h2 className="text-3xl text-red-600">{astroData.name}</h2>
                  <p className="text-sm mt-2">{astroData.date_range}</p>
                  <h2 className="mt-5 text-lg text-blue-800 font-bold">Health</h2>
                  <div className="text-sm text-justify">{astroData.health}</div>
                </div>
              </div>
            </>
            }
            </div>
{/* SCROLL BUTTON LEFT RIGHT */}
          <button type="button" className="absolute top-0 -left-8 z-30 pb-10 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex  items-center justify-center w-7 bg-gray-300 rounded-full h-7 sm:w-10 sm:h-10 group-hover:bg-300 group-focus:ring-4 group-focus:ring-gray-400 group-focus:outline-none">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="18" height="18" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
              <span className="sr-only ">Previous</span>
            </span>
          </button>
          <button type="button"className="absolute top-0 -right-8 z-30 flex pb-10 items-center justify-center h-full cursor-pointer group focus:outline-none"data-carousel-next>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full sm:w-10 sm:h-10 bg-gray-300 group-hover:bg-gray-300 group-focus:ring-4 group-focus:ring-gray-400 group-focus:outline-none">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="18" height="18" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
         </div>
      </div> 
    </div>
  </main>
  </>
  );
}




 
        

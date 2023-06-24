import { useEffect, useState } from 'react';

const Clock = () => {

      const [ time, setTime ] = useState(new Date);

      const currentDate = new Date();
      useEffect(() => {
             const timer = setInterval(() => setTime(new Date()), 1000);
       return() => clearInterval(timer);
      }, []);
      return (
            <div className='digiclock tracking-wide'>
                  <div 
                  className='text-yellow-300 font-bold animate-pulse'>
                        {currentDate.toDateString()} - <span className='text-white'> {currentDate.toLocaleTimeString()}
                        </span>
                  </div>
            </div>
      );
}
 
export default Clock;
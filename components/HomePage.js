import { useState, useEffect } from 'react';
import getCurrentDateTime from "../utilities/getCurrentDateTime";


export async function getServerSideProps() {
      const dateTime = getCurrentDateTime();
      return {
            props: {
                  date: dateTime.date,
                  time: dateTime.time,
            },
      };
}

const HomePage = ({date, time }) => {

      const [clientDate, setClientDate] = useState(date);
      const [clientTime, setClientTime] = useState(time);

      useEffect(() => {
            const interval = setInterval(() => {
                  const currentDate = new Date();
                  setClientDate(currentDate.toDateString());
                  setClientTime(currentDate.toLocaleTimeString());
            }, 1000);
            return() => clearInterval(interval);
      }, []);

      return (
            <div className='digiclock text-white font-light text-lg animate-pulse'>
                  <h3>Date / Petsa: <span className='font-bold text-orange-400'>{clientDate}</span></h3>
                  <h3>Time / Oras: <span className='font-bold text-orange-400'>{clientTime}</span></h3>
            </div>
      
            
      );
}
 
export default HomePage;
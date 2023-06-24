
export const getCurrentDateTime = () => {
      const currentDate = new Date();
          
      return {
            date: currentDate.toDateString(),
            time: currentDate.toTimeString(),
      } 
}
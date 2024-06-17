import React, { useState } from 'react';

const AgeCalculator = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errors, setErrors] = useState({});
    const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateDate(day, month, year);
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          calculateAge(day, month, year);
          clearFields();
        }
      };
      const clearFields = () => {
        setDay('');
        setMonth('');
        setYear('');
      };
      const validateDate = (day, month, year) => {
        const newErrors = {};
        const currentYear = new Date().getFullYear();
        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        if (!day) {
          newErrors.day = 'This field is required';
        } else if (day < 1 || day > daysInMonth[month - 1]) {
          newErrors.day = 'Must be a valid day';
        }
    
        if (!month) {
          newErrors.month = 'This field is required';
        } else if (month < 1 || month > 12) {
          newErrors.month = 'Must be a valid month';
        }
    
        if (!year) {
          newErrors.year = 'This field is required';
        } else if (year >= currentYear) {
          newErrors.year = 'Must be in the past';
        }
    
        return newErrors;
      };
    
      const calculateAge = (day, month, year) => {
        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();
        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();
    
        if (ageDays < 0) {
          ageMonths -= 1;
          ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }
    
        if (ageMonths < 0) {
          ageYears -= 1;
          ageMonths += 12;
        }
    
        const totalDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    
        setAge({ years: ageYears, months: ageMonths, days: ageDays, totalDays });
      };
  return (
   
    <section className="bg-red-400 p-8 rounded-t-lg rounded-bl-lg flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="day" className="text-gray-600 uppercase text-sm font-medium">Day</label>
            <input
              type="number"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`border p-2 rounded mt-2 ${errors.day ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="DD"
            />
            {errors.day && <p className="text-red-500 text-xs mt-1">{errors.day}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="month" className="text-gray-600 uppercase text-sm font-medium">Month</label>
            <input
              type="number"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`border p-2 rounded mt-2 ${errors.month ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="MM"
            />
            {errors.month && <p className="text-red-500 text-xs mt-1">{errors.month}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-gray-600 uppercase text-sm font-medium">Year</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`border p-2 rounded mt-2 ${errors.year ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="YYYY"
            />
            {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
            
          </div>
          
        </div>
        
        
        
          <hr />
          <hr />

          <div className='my-auto flex justify-center items-center '>
            <button type="submit"
           className=" bg-purple-600 mt-2 text-white rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
          </div>
      
        <div className="flex flex-col text-center mt-8">
          <h1 className="text-3xl font-bold italic"><span className="text-purple-600">{age.years}</span> years</h1>
          <h1 className="text-3xl font-bold italic"><span className="text-purple-600">{age.months}</span> months</h1>
          <h1 className="text-3xl font-bold italic"><span className="text-purple-600">{age.days}</span> days</h1>
          <h1 className="text-3xl font-bold italic"><span className="text-purple-600">Total days:</span>  {age.totalDays}</h1>
       
        </div>
      </form>
    </section>
    
  );
};

export default AgeCalculator;

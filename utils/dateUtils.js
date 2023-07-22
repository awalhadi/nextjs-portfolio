export function calculateExperience(startDate) {
    const today = new Date();
    const start = new Date(startDate);
  
    let yearsDiff = today.getFullYear() - start.getFullYear();
    let monthsDiff = today.getMonth() - start.getMonth();
    let daysDiff = today.getDate() - start.getDate();
  
    if (daysDiff < 0) {
      monthsDiff--;
      const tempDate = new Date(today);
      tempDate.setDate(1); // Set to the first day of the month
      daysDiff = Math.floor((today - tempDate) / (1000 * 60 * 60 * 24));
    }
  
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }
  
    return {
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
    };
  }
  
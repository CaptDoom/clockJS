function updateClock() {
    const now = new Date();
    
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate rotation angles
    const hourAngle = (hours % 12 + minutes / 60) * 360 / 12;
    const minuteAngle = (minutes + seconds / 60) * 360 / 60;
    const secondAngle = (seconds) * 360 / 60;
    
    // Apply rotation
    hourElement.style.transform = `rotate(${hourAngle}deg)`;
    minuteElement.style.transform = `rotate(${minuteAngle}deg)`;
    secondElement.style.transform = `rotate(${secondAngle}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();
  
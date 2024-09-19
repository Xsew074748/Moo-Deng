import { useState } from 'react'
import './App.css'

export default function App(){
  const[level,setLevel]=useState(1);
  const [size, setSize] = useState(100);
  
  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue);  
  };
  const getPigImage = () => {
    if (level < 100) {
      return "https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg";
    } else {
      return "https://c.files.bbci.co.uk/16F65/production/_107335049_epahi054463889.jpg";
    }
  };
  const imageSrc = `${getPigImage()}?t=${Date.now()}`;
  
  const reset = () => {
    setLevel(1);
    setSize(100); //รีเกม
  };
  return (
   <>
    <header className="header">
      <h1>โปรดให้อาหารน้องหมูเด้งงง!!!!!!</h1>
    </header>

    <div className="pig">
      <h1>level{level}</h1>
      <img src={imageSrc} alt="Moo Deng" style={{ width: size, height: size }}/>
    </div>

    <div className="food">
      <img src="https://media.istockphoto.com/id/1412456086/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-3-%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%82%E0%B8%AD%E0%B8%87-deschampsia-cespitosa-%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=rPViNeB18w0QTBjF73zb4xB0WM5O4RYvgmWlBHKxXes=" alt="หญ้า"  onClick={() => foodPig(5)}/>
      <img src="https://www.disthai.com/images/content/original-1696393000736.jpg" alt="เเตงโม" onClick={() => foodPig(10)} />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Foppmymzso4FkVkHHyrggcjoLaQvA3OhyQ&s" alt="ฟักทอง" onClick={() => foodPig(20)}/>
    </div>
    <div className="but">
      <button onClick={reset}>Rebirth</button>
    </div>
  </>
  );
}


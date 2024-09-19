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
      return "Nong-Moo-Deng4548-5.jpg";
    } else {
      return "434660546_2406849546371543_5277468350347986058_n.jpg";
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
      <img src="istockphoto-1412456086-612x612.jpg" alt="หญ้า"  onClick={() => foodPig(5)}/>
      <img src="original-1696393000736.jpg" alt="เเตงโม" onClick={() => foodPig(15)} />
      <img src="images.jpg" alt="ฟักทอง" onClick={() => foodPig(25)}/>
    </div>
    <div className="but">
      <button onClick={reset}>Rebirth</button>
    </div>
  </>
  );
}


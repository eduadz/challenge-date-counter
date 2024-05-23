import {useState} from 'react';
import './App.css';


export default function App() {
  return (
    <div className='App'>
      <Counter/>
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="buttons step">
        <input 
          type="range" 
          min="1" 
          max = "10" 
          value={step} 
          onChange={(e)=>setStep(Number(e.target.value))}

        />
        <span>{step}</span>
      </div>

      <div className="buttons count">
        <button onClick={()=> setCount((c)=> c-step)}>-</button>
        <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}></input>
        <button onClick={()=> setCount((c)=> c+step)}>+</button>
      </div>
      <div>
        <p>
        <span>{count === 0? "Today is ": count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
        {date.toDateString()}</span>
        </p>
      </div>

      {(count !== 0 || step !== 1)? <div className="buttons">
        <button>RESET</button>
      </div> : null}
    </div>
  );
}
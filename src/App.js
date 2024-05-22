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
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  
  const date = new Date();
  date.setDate(date.getDate() + count)

  return (
    <div>
      <div className="buttons step">
        <button onClick={step > 0?()=> setStep((s)=> s-1): null}>-</button>
        <span>Step: {step}</span>
        <button onClick={()=> setStep((s)=> s+1)}>+</button>
      </div>

      <div className="buttons count">
        <button onClick={()=> setCount((c)=> c-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={()=> setCount((c)=> c+step)}>+</button>
      </div>
      
      <span>{count === 0? "Today is ": count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`}</span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
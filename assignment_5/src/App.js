import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

const SlideShow = ({imgs}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length -1) {
      setIndex(0)
    }
      else {
        setIndex(index +1)
      }
    }
  const prev = () => {
    if (index ==0) {
      setIndex(imgs.length -1)
    }
    else{
      setIndex(index -1)
    }
    }
  return <div className='sliderShow'>
    <img className='Photos' style={{width:"70%"}} src={imgs[index]}/>
    <div className='move' >
      <button onClick={prev}>-</button>
      <button onClick={next}>+</button>
    </div>
  </div>
}
 

function App() {
  return (
    <div className="App">
      <h1>Photos</h1>
      <SlideShow
      imgs  ={[
'https://images.unsplash.com/photo-1552336697-afe219cc33c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80',
'https://images.unsplash.com/photo-1652365210902-a7919f399e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
'https://images.unsplash.com/photo-1552336697-afe219cc33c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80' 
     ]}
/>
    </div>
  );
}

export default App;

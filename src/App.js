import { useState } from "react";
import './css/App.css';
import InputColor from './components/InputColor'
import PreviewColor from './components/PreviewColor'


function App() {
   const [color, setColor] = useState("")

   return (
      <>
         <PreviewColor
            color={color}
         />
         <InputColor 
            setColor={setColor}
         />
      </>
   );
}

export default App;

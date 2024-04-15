import { useState } from "react";
import './css/App.css';
import InputColor from './components/InputColor'
import PreviewColor from './components/PreviewColor'

function App() {
   const [color, setColor] = useState("")
   const [hexValue, setHexValue] = useState("")
   const [isDarkText, setIsDarkText] = useState(true)

   return (
      <>
         <PreviewColor
            color={color}
            hexValue={hexValue}
            isDarkText={isDarkText}
         />
         <InputColor 
            setColor={setColor}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
         />
      </>
   );
}

export default App;

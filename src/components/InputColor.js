import colorNames from "colornames"

const InputColor = ({ 
   setColor, setHexValue, isDarkText, setIsDarkText 
}) => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <label htmlFor="input">Enter Color</label>

         <input 
            autoFocus
            type="text"
            id="input"
            placeholder="Enter Color"
            onChange={(e) => {
               setColor(e.target.value)   
               setHexValue(colorNames(e.target.value))
            }}
         />

         <button
            type="submit"
            onClick={() => setIsDarkText(!isDarkText)}
            >Toggle Text Color</button>
      </form>

   )
}

export default InputColor

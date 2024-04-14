const InputColor = ({ setColor }) => {
   return (
      <input 
         autoFocus
         type="text" placeholder="Enter Color"
         onChange={(e) => setColor(e.target.value)}
      />
   )
}

export default InputColor

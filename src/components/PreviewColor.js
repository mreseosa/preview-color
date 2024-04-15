const PreviewColor = ({ color, hexValue, isDarkText }) => {
   return (
      <div 
         className="view"
         style={{
            backgroundColor: color.toLowerCase(),
            color: isDarkText ? '#000' : '#fff'
         }}
         >
         <div className="txt">{!color ? 'Empty Value' : color}</div>
         <div className="txt hex">{hexValue ? hexValue : color}</div>
      </div>
   )
}

PreviewColor.defaultProps = {
   color: "white"
}

export default PreviewColor

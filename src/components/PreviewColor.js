const PreviewColor = ({ color }) => {
   return (
      <div 
         className="view"
         style={{backgroundColor: color.toLowerCase()}}
         >
         <div className="txt">{!color ? 'Empty Value' : color}</div>
      </div>
   )
}

PreviewColor.defaultProps = {
   color: "white"
}

export default PreviewColor

import React from 'react'

function Header({title}) {
  return (
    <div className="bg-slate-500 text-5xl text-center">
    {title} 
    </div>
  )
}
Header.defaultProps={
  title:"Default list"
}

export default Header
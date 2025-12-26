import React from 'react'

export const Navbar = ({filtertem,uniquList}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">

            { uniquList.map((currItem)=>{
                return(

                <>
                <button className="btn-group__item" onClick={()=> filtertem(currItem)}>{currItem}</button>

                </>
                )
            })}
            
            <button className="btn-group__item" onClick={()=> filtertem("All")}>All</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar;

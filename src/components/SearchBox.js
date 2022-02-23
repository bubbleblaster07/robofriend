import React from "react";


const SearchBox=({ searchChange })=>{
    return(
        <div className='pa2'>
            <input className='pa3 ba b--red bg-light-blue' type='search' placeholder='search friends' 
                //onChange={(event)=>onChange(event)}
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
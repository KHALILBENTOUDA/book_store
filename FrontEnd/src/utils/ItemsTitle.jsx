import React from 'react'
const ItemesTitle = ({type,more,pathText}) => {
  return (
    <>
            {
              more ? 
              <div className='chgeCate text-black container '>
                <div className='catagoryitme'>{type}</div>
                <a href={pathText}>
                  <button className='catgorymore text-lgrn'>{more} <i className='fa-solid fa-angles-right'></i></button>
                </a>
                
            </div>
            :
              <div className='chgeCate text-black '>
                <div className='catagoryitme '>{type}</div>
              </div>
            }
    </>
  )
}

export default ItemesTitle
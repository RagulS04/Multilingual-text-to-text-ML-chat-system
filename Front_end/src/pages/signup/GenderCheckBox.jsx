import React from 'react'

const GenderCheckBox = ({handleGender,selectedGender}) => {
  return (
    <div className='flex justify-around'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : "" }`}>
            <span className="label-text">Male</span> 
            <input type="checkbox" className="checkbox checkbox-primary" 
              checked={selectedGender==="male"}
              onChange={()=>handleGender("male")}
              />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : "" }`}>
            <span className="label-text">Female</span> 
            <input type="checkbox" className="checkbox checkbox-primary"
              checked={selectedGender==="female"}
              onChange={()=>handleGender("female")}            
            />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox
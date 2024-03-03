import { useField } from 'formik'
import React from 'react'

function Checkbox({...props}) {
const [field,meta] = useField(props);
  return (
    <>
    <div className='checkbox'>
        <input {...field} {...props}  />
        <span>Sertleri qebul edin</span>

    </div>
        {meta.error &&  <div className='errors'>{meta.error}</div>}
    </>
  )
}

export default Checkbox
import React from 'react'
import NavBarSec from '../sections/NavBarSec'
import FooterSec from '../sections/FooterSec'
import EditProdSec from '../sections/editProdSec/EditProductSec'
import CreateForm from '../components/EditProducts/CreateForm'
import UpdateForm  from '../components/EditProducts/UpdateForm'
function EditProductView() {
  return (
    <div>
      <NavBarSec link={''} icon={''} quantity={0}></NavBarSec>

      
      <CreateForm />
      <hr className='my-5' /> 
      <EditProdSec />
      <hr className='my-5' /> 
      <UpdateForm />
      
      
      <FooterSec></FooterSec>


    </div>
  )
}

export default EditProductView
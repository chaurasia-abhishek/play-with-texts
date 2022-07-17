import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'13px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} mb-1`} role="alert" >
        {props.alert.msg}
      </div>}
    </div>
  )
}
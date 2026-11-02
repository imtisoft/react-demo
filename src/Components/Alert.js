import React from 'react'

function Alert(props) {
  return (
  props.alert && <div className="alert alert-primary theme-warning" role="alert">
  <p>{props.alert.type} {props.alert.msg}<button type="button" className="btn-close ms-2" data-bs-dismiss="alert" aria-label="Close"></button></p>
</div>

  )
}

export default Alert

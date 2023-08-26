export default function CreateUser({
  onClose,
  formValues,
  formChangeHandler,
  formErrors,
  formValidate,
  onEditUser
}) {
  return (
<div className="overlay">
<div className="backdrop"></div>
<div className="modal">
<div className="user-container">
  <header className="headers">
    <h2>Edit User/Add User</h2>
    <button className="btn close" onClick={onClose}>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
        className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor"
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
        </path>
      </svg>
    </button>
  </header>
  <form onSubmit={onEditUser}>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-user"></i></span>
          <input style={formErrors.firstName ? {borderColor:'red'} : null} id="firstName" name="firstName" type="text" value={formValues.firstName} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">
          {formErrors.firstName}
        </p>}
        
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-user"></i></span>
          <input style={formErrors.lastName ? {borderColor:'red'} : null} id="lastName" name="lastName" type="text" value={formValues.lastName} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors &&           <p className="form-error">
          {formErrors.lastName}
        </p>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-envelope"></i></span>
          <input style={formErrors.email ? {borderColor:'red'} : null} id="email" name="email" type="text" value={formValues.email} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.email}</p>}


      
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone number</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-phone"></i></span>
          <input style={formErrors.email ? {borderColor:'red'} : null} id="phoneNumber" name="phoneNumber" type="text" value={formValues.phoneNumber} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.phoneNumber}</p>}
      </div>
    </div>

    <div className="form-group long-line">
      <label htmlFor="imageUrl">Image Url</label>
      <div className="input-wrapper">
        <span><i className="fa-solid fa-image"></i></span>
        <input style={formErrors.imageUrl ? {borderColor:'red'} : null} id="imageUrl" name="imageUrl" type="text" value={formValues.imageUrl} onChange={formChangeHandler} onBlur={formValidate}/>
      </div>
      {formErrors && <p className="form-error">{formErrors.imageUrl}</p>}
      
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-map"></i></span>
          <input style={formErrors.country ? {borderColor:'red'} : null} id="country" name="country" type="text" value={formValues.country} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.country}</p>}   
      </div>
      
      <div className="form-group">
        <label htmlFor="city">City</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-city"></i></span>
          <input style={formErrors.city ? {borderColor:'red'} : null} id="city" name="city" type="text" value={formValues.city} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.city}</p>}
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="street">Street</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-map"></i></span>
          <input style={formErrors.street ? {borderColor:'red'} : null} id="street" name="street" type="text" value={formValues.street} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.street}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="streetNumber">Street number</label>
        <div className="input-wrapper">
          <span><i className="fa-solid fa-house-chimney"></i></span>
          <input style={formErrors.streetNumber ? {borderColor:'red'} : null} id="streetNumber" name="streetNumber" type="text" value={formValues.streetNumber} onChange={formChangeHandler} onBlur={formValidate}/>
        </div>
        {formErrors && <p className="form-error">{formErrors.streetNumber}</p>}
        
      </div>
    </div>
    <div id="form-actions">
      <button id="action-save" className="btn" type="submit">Save</button>
      <button id="action-cancel" className="btn" type="button" onClick={onClose}>
        Cancel
      </button>
    </div>
  </form>
</div>
</div>
  </div>
  )
}
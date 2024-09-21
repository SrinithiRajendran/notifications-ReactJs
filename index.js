const Notification = props => {
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt='image' />
      <p>{props.message}</p>
    </li>
  )
}

const element = (
  <div className='bg-container'>
    <h1>Notification</h1>
    <ul>
      <Notification
        className='info'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Information Message'
      />
      <Notification
        className='success'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        message='Success Message'
      />
      <Notification
        className='warning'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        message='Warning Message'
      />
      <Notification
        className='error'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        message='Error Message'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

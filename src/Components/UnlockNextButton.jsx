import '../css/UnlockNextButton.css'

function UnlockNextButton({onClick, next}) {
  return (
    <div className="unlock-button-container" onClick={onClick}>
      <button className="unlock-button">{ next }</button>
    </div>
  )
}

export default UnlockNextButton

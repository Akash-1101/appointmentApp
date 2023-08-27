// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {propp, func} = props
  const {id, title, date, isStarred} = propp
  const onclickstarr = () => {
    func(id)
  }

  let a
  if (isStarred) {
    a =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  } else {
    a = 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  }
  return (
    <li>
      <div className="ap-container">
        <p className="ap-title">{title}</p>
        <button
          onClick={onclickstarr}
          data-testid="star"
          type="button"
          className="star-btn"
        >
          <img alt="star" src={a} />
        </button>
      </div>
      <p className="date-para">{date}</p>
    </li>
  )
}
export default AppointmentItem

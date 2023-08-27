import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentList = []

class Appointments extends Component {
  state = {
    appointmentList: initialAppointmentList,
    title: '',
    date: '',
    isstarredd: false,
  }

  onchangetitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeDate = event => {
    const date1 = format(new Date(event.target.value), 'dd MMMM yyyy, EEEE')
    this.setState({
      date: date1,
    })
  }

  addAppointment = event => {
    event.preventDefault()
    const {appointmentList, title, date} = this.state
    const newItem = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState({
      appointmentList: [...appointmentList, newItem],
      title: '',
      date: null,
    })
  }

  onclickstar = id => {
    const {appointmentList} = this.state
    this.setState({
      appointmentList: appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    })
  }

  onclickstarred = () => {
    const {appointmentList, isstarredd} = this.state
    const filteredList = appointmentList.filter(each => each.isStarred === true)

    if (isstarredd) {
      this.setState({appointmentList, isstarredd: false})
    } else {
      this.setState({appointmentList: filteredList, isstarredd: true})
    }
  }

  render() {
    const {appointmentList, title, date} = this.state
    return (
      <div className="bg-main-container">
        <div className="bg-container1">
          <div className="form-container">
            <form onSubmit={this.addAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="title" className="title">
                Title
              </label>
              <br />
              <input
                id="title"
                onChange={this.onchangetitle}
                className="inputTitle"
                placeholder="Title"
                type="text"
                value={title}
              />
              <br />
              <label htmlFor="date2" className="title">
                Date
                <br />
              </label>
              <input
                id="date2"
                onChange={this.onchangeDate}
                className="inputTitle"
                type="date"
                value={date}
              />
              <br />
              <button className="buttonEle" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>

          <hr />
          <div className="appointmens-container">
            <div className="bg-container21">
              <h1>Appointments</h1>
              <button
                onClick={this.onclickstarred}
                type="button"
                className="buttenEl2"
              >
                Starred
              </button>
            </div>
            <ul>
              {appointmentList.map(each => (
                <AppointmentItem
                  func={this.onclickstar}
                  key={each.id}
                  propp={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {vaccineDataList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    this.setState({apiStatus: apiStatusConstants.in_progress})

    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        vaccineDataList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderAllComponents = () => {
    const {vaccineDataList} = this.state
    return (
      <>
        <VaccinationCoverage vaccineDataList={vaccineDataList} />
        <VaccinationByGender vaccineDataList={vaccineDataList} />
        <VaccinationByAge vaccineDataList={vaccineDataList} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const result = () => {
      const {apiStatus} = this.state
      switch (apiStatus) {
        case apiStatusConstants.success:
          return this.renderAllComponents()
        case apiStatusConstants.failure:
          return this.renderFailureView()
        case apiStatusConstants.in_progress:
          return this.renderLoader()
        default:
          return null
      }
    }

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="logo-name">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        {result()}
      </div>
    )
  }
}

export default CowinDashboard

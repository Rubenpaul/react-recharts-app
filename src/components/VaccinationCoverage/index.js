// Write your code here
import './index.css'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccineDataList} = props
  const {last7DaysVaccination} = vaccineDataList

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          width={1000}
          height={300}
          data={last7DaysVaccination}
          margin={{top: 5}}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: ' #94a3b8',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: ' #94a3b8',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill=" #5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="Dose 2" fill=" #f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage

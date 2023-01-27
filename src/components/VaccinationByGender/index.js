// Write your code here

import './index.css'

import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccineDataList} = props
  const {vaccinationByGender} = vaccineDataList
  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={vaccinationByGender}
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill=" #f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" layout="horizontal" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender

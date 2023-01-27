// Write your code here
import './index.css'

import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccineDataList} = props
  const {vaccinationByAge} = vaccineDataList
  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={vaccinationByAge}
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill=" #2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" layout="horizontal" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge

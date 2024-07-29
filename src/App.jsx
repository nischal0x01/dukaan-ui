import { useState } from 'react'
import { RevenueCard } from './components/RevenueCards'
import { Button } from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-1'>
      <div className='grid grid-cols-3'>
        <RevenueCard title={"Amount Pending"} amount={"92,312.69"} orderCount={"13"}></RevenueCard>
      </div>
      <Button></Button>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'

function App() {
  const [user, setUser] = useState()
  

  useEffect(() => {
    const url= 'https://randomuser.me/api/'
    axios.get(url)
      .then(res => setUser(res.data.results[0]))
      .catch(error => console.log(error))
  }, [])

  

  return (
    <div className="App">
        <CardUser
          user={user}
        />
    </div>
  )
}

export default App

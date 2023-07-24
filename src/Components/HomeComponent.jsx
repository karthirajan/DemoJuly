import { useContext } from 'react'
import {UserContext} from '../App'

function HomeComponent(){
    return(
      <Acom1 />
    )
}
export function Acom1(){
    return(
      <Acom2 />
    )
}
export function Acom2(){
    const obj=useContext(UserContext)
    return(
      <>
      <div style={{textAlign:"center"}}>
      <h1>{obj.user}</h1>
      {
        obj.status? <div>IN</div>:<div>OUT</div>
      }
      <button onClick={obj.changeStatus}>Check in</button>
      </div>
      </>
    )
}

export default HomeComponent;
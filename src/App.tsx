
import { useState } from "react"
import Mynav from "./Nav/Nav"
import MyCarousel from "./MyCarousel"
import Title from "./Title/Title"
import Games from "./Games/Games"

const App = () => {

  const [cartItems, setCartItems] = useState(['Avocado', 'Chicken', 'Salmon'])

  return (
    <>
      <div>
        <Mynav />
        <Title />
        <MyCarousel />
        <Games />
      </div>
    </>
  )
}

export default App

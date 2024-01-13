import Footer from "./Component/Footer/Footer"
import Home from "./Component/Home/Home"
import Info from "./Component/Info/Info"
import Lounge from "./Component/Lounge/Lounge"
import Navbar from "./Component/Navbar/Navbar"
import Search from "./Component/Search/Search"
import Subscribers from "./Component/Subscribers/Subscribers"
import Support from "./Component/Support/Support"
import Travelers from "./Component/Travelers/Travelers"


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/>
    </>
  )
}

export default App

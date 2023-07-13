import HeaderBar from "../../molecules/HeaderBar/HeaderBar"
import TopNavigation from "../../molecules/TopNavigation/TopNavigation"

const Header = () => {

  return (
    <header className="fixed w-full h-28 -top-0 -left-0 z-50">
      <HeaderBar />
      <TopNavigation />
    </header>
  )
}



export default Header
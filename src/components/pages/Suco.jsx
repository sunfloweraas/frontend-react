import Sidebar from "../layout/Sidebar"
import Header from "../layout/Header"
import Footer from "../layout/Footer"


const Suco = () => {
    return (
      <>
      <Header />
      <div id="main">
          <Sidebar />
          <h1>Suco é muito bom 🥤</h1>
      </div>
      <Footer />
      </>
    )
}

export default Suco
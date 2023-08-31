import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"

const Home = () => {
  return (
    <>
        <Header />
        <div id="main">
            <Sidebar />
            <Content>
              <h1>você está na Home </h1>
              <h2>bem -vindo ✨</h2>
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default Home
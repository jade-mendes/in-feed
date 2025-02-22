import DevProfile from './components/DevProfile'
import Header from './components/Header'
import Post from './components/Post'

function App() {

  return (
    <>
      <Header />
      <main>
        <DevProfile />
        <Post profilePicturePath='../../assets/op1.jpeg' name='Elizabeth Best' role='Designer'/>
      </main>
    </>
  )
}

export default App

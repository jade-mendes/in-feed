import DevProfile from './components/DevProfile'
import Header from './components/Header'
import Post from './components/Post'
import op1 from './assets/op1.jpeg'
import op2 from './assets/op2.jpeg'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <DevProfile />
        <div>
          <Post profilePicturePath={op1} name='Elizabeth Best' role='Designer'/>
          <Post profilePicturePath={op2} name='Ron Ritchie' role='Dev Back-end'/>
        </div>
      </main>
    </>
  )
}

export default App

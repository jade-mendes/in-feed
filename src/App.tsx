import DevProfile from './components/DevProfile/DevProfile'
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <DevProfile />
        <PostList />
      </main>
    </>
  )
}

export default App

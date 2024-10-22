
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
// import { number } from 'prop-types'

function App() {
 const [bookmarks,setBookmarks] = useState([])
 const [readingTime, setReadingTime] = useState(0)


 const handelAdToBookmark = blog =>{
const newBookmarks = [...bookmarks, blog]
setBookmarks(newBookmarks)
 }

 const handelMarkAsRead = time =>{
  const newReadingTime = readingTime + time
  setReadingTime(newReadingTime)
 }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handelAdToBookmark={handelAdToBookmark} handelMarkAsRead={handelMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    
    </>
  )
}

export default App

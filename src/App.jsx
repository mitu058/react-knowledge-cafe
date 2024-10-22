
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

 const handelMarkAsRead = (id,time) =>{
  const newReadingTime = readingTime + time
  setReadingTime(newReadingTime)
  // remove the read blog from bookmark
  // console.log('remove bookmark',id)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)

 }
  return (
    <>
     <Header></Header>
     <div className='flex container mx-auto lg:flex-row flex-col justify-between'>
     <Blogs handelAdToBookmark={handelAdToBookmark} handelMarkAsRead={handelMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    
    </>
  )
}

export default App

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='my-8 px-4'>
        <div className=' border-2 border-purple-200 p-3 rounded-lg text-center'>
        <h2 className='text-xl '>Spent time on read: {readingTime} min</h2>
        </div>

      <div className="ml-6  py-3 rounded-lg ">
      
            <h2 className='text-center text-xl font-bold '> Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
bookmarks:PropTypes.array,
readingTime:PropTypes.number
}

export default Bookmarks

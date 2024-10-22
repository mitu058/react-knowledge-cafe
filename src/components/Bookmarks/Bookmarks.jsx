import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='my-8'>
        <div className='mb-6 border-2 p-3 rounded-lg bg-cyan-200'>
        <h2 className='text-xl font-bold'>Spent time on read: {readingTime} min</h2>
        </div>

      <div className="ml-6 bg-gray-200 py-3 rounded-lg text-center">
      
            <h2 className='text-center text-xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h2>
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

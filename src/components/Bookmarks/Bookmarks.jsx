import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div>
        <div className='mb-6'>
        <h2 className='text-3xl font-bold'>Reading Time : {readingTime} min</h2>
        </div>

      <div className="ml-6 bg-gray-300 pb-3">
      
            <h2 className='text-center text-xl'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
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

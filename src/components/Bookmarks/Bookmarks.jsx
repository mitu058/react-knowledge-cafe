import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
  return (
    <div>
      <div className="md:w-1/3">
            <h2>Bookmarked Blogs : {bookmarks.length}</h2>
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
bookmarks:PropTypes.object
}

export default Bookmarks

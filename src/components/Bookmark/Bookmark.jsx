import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
 const {title} = bookmark
    return (
        <div className='bg-slate-200 py-2 px-6 m-4 rounded-xl '>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
    }
export default Bookmark;
import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({blog,handelAdToBookmark,handelMarkAsRead }) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtag} = blog
    return (
        <div className='mb-16'>
            <img className='w-full mb-6' src={cover} alt="" />
            <div className='flex justify-between mb-2'>
                <div className='flex space-x-3'>
             <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
             <div>
                <h4 className='text-2xl mb-2'>{author}</h4>
                <h5>{posted_date}</h5>
             </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={ ()=> handelAdToBookmark(blog)} className="ml-2"><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>Title:{title}</h2>
            <p className=''>
                {
                hashtag.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handelMarkAsRead(reading_time)}  className="text-purple-700 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelAdToBookmark:PropTypes.object,
    handelMarkAsRead: PropTypes.object
}
export default Blog;
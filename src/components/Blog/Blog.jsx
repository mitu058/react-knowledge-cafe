import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({blog,handelAdToBookmark,handelMarkAsRead }) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtag,id} = blog
    return (
        <div className='mb-14  rounded-lg space-y-2'>
            <img className='w-full mb-6 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between '>
                <div className='flex space-x-3'>
             <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
             <div>
                <h4 className='text-xl lg:text-2xl mb-2 font-bold'>{author}</h4>
                <h5 className="font-bold">{posted_date}</h5>
             </div>
                </div>
                <div className="flex items-center">
                    <span className="font-bold lg:text-lg">{reading_time} min read</span>
                    <button onClick={ ()=> handelAdToBookmark(blog)} className="ml-2 text-red-500 lg:text-2xl"><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold '>{title}</h2>
            <p className='opacity-80 text-base'>
                {
                hashtag.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handelMarkAsRead(id,reading_time)}  className="text-purple-400 text-xl  underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelAdToBookmark:PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blog;
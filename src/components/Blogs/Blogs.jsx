import  { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handelAdToBookmark,handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( ()=>{
     fetch('blog.json')
     .then(res => res.json())
     .then(data => setBlogs(data))
    },[])
    return (
        <div className='lg:w-3/5 my-8 px-4'>
        
           {
            blogs.map(blog => <Blog
                 key={blog.id} blog={blog}
                 handelAdToBookmark = {handelAdToBookmark}
                 handelMarkAsRead={handelMarkAsRead}
                 ></Blog>)
           }
        </div>
    );
};
Blogs.propTypes ={
 handelAdToBookmark:PropTypes.func.isRequired,
 handelMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;
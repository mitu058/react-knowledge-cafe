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
        <div className='lg:w-2/3 my-8 px-4'>
           {/* <h1 className="text-4xl pb-3">Blogs : {blogs.length}</h1>  */}
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
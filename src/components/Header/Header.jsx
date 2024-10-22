
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center px-4 py-5 max-w-7xl mx-auto border-b-2'>
      <h1 className='lg:text-3xl text-2xl font-bold'>Knowledge Hunter</h1>
           <img className='w-12 lg:w-16' src={profile} alt="" /> 
        </header>
    );
};

export default Header;
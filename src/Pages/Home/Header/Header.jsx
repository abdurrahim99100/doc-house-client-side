import './header.css';
import photoOne from '../../../assets/home/header/header-female-person-01.jpg';
import photoTwo from '../../../assets/home/header/header-male-person.jpg';
import photoThree from '../../../assets/home/header/header-female-person-02.jpg';

const Header = () => {
    return (
        <div className='headerBackground'>
            <div className='lg:flex lg:flex-row-reverse justify-between items-center h-[80vh] max-w-screen-2xl mx-auto text-white p-5'>
                <div className='flex relative lg:p-0'>
                    <img className='border-solid border-8 w-[170px] lg:w-[300px] h-[170px] lg:h-[300px] border-white' src={photoOne} alt="" />
                    <img className='border-solid border-8 w-[170px] lg:w-[260px] h-[170px] lg:h-[260px] border-gray-400 ml-[90px] lg:ml-[170px] mt-[80px] lg:mt-[80px] absolute rotate-6' src={photoTwo} alt="" />
                    <img className='border-solid border-8 w-[170px] lg:w-[300px] h-[170px] lg:h-[300px] border-white ml-[10px]' src={photoThree} alt="" />
                </div>
                <div className='lg:w-5/12 mt-48 lg:mt-0'>
                    <h3 className='text-2xl lg:text-7xl font-semibold'>Your Best Medical Help Center</h3>
                    <p className='text-2xl my-2 lg:my-5'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className='bg-[#F7A582] p-2 my-2 rounded text-xl'>All Service</button>
                </div>
            </div>
        </div>
    );
};

export default Header;

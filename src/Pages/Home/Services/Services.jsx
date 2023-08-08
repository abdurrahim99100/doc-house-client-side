import girlDoctor from './../../../assets/home/services-girl.jpg';
import teeth from './../../../assets/home/teeth.jpg';
import { FaPhone } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='max-w-screen-2xl mx-auto lg:my-20 p-5'>
            <div className="lg:flex lg:gap-5">
                <div>
                    <img className='rounded-xl lg:w-[1500px]' src={girlDoctor} alt="" />
                </div>
                <div>
                    <div>
                        <h3 className='text-3xl font-bold'>Our Services</h3>
                        <p className='my-5 text-gray-500 text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div>
                        <div className='border-solid border-2 border-gray-300 rounded flex justify-between text-2xl font-bold'>
                            <button className='bg-[#F7A582] p-5 rounded'>Cavity Protection</button>
                            <button>Cosmetic Dentist</button>
                            <button className='mr-5'>Oral Surgery</button>
                        </div>
                        <img className='my-5 rounded-xl lg:h-[420px] lg:w-full' src={teeth} alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold my-2'>Electro  Gastrology Therapy</h3>
                        <p className='my-2 text-gray-500 text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <p className='my-2 text-gray-500 text-lg'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button className='text-[#F7A582] border-solid border-2 p-1 rounded border-[#F7A582]'>More Details</button>
                    </div>
                </div>
            </div>
            <div className='text-white mt-20 flex flex-col gap-5 lg:flex-row justify-between'>
                <div className='flex gap-2 bg-[#07332F] lg:w-[400px] px-12 py-20 rounded-xl text-xl'>
                    <FaPhone />
                    <div>
                        <h3>Opening Hours</h3>
                        <p className='text-lg'>Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                </div>
                <div className='flex gap-2 bg-[#F7A582] lg:w-[400px] px-12 py-20 rounded-xl text-xl'>
                    <FaPhone />
                    <div>
                        <h3>Our Locations</h3>
                        <p className='text-lg'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                </div>
                <div className='flex gap-2 bg-[#07332F] lg:w-[400px] px-12 py-20 rounded-xl text-xl'>
                    <FaPhone />
                    <div>
                        <h3>Contact Us</h3>
                        <p className='text-lg'>+88 01750 00 00 00</p>
                        <p className='text-lg'>+88 01750 00 00 00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
import CountUp from 'react-countup';
import { PiPersonArmsSpreadDuotone, PiStudentDuotone } from "react-icons/pi";
import { LiaBookReaderSolid } from "react-icons/lia";
import {  FaAddressCard } from 'react-icons/fa';



const Counting = () => {
    return (
        <div className="bg-[#16325B] text-white">
            <div className="max-w-6xl mx-auto py-32 px-4">
                {/* <p className="text-3xl text-center font-bold mb-16">Purchase Unique Style Paintings</p> */}
                <div className="flex justify-evenly flex-wrap gap-6">
                    <div className="text-center w-[132px] flex flex-col items-center mb-4">
                        <PiStudentDuotone className='text-[60px]'/>
                        <p className="text-4xl mb-4 mt-4 text-[#FFDC7F] font-semibold"><CountUp end={1200} />+</p>
                        <p className="font-semibold">Students</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black"></div>
                    <div className="text-center w-[132px] flex flex-col items-center mb-4">
                        <LiaBookReaderSolid  className='text-[60px]'/>
                        <p className="text-4xl mb-4 mt-4 text-[#FFDC7F] font-semibold"><CountUp end={1200} />+</p>
                        <p className="font-semibold">Faculty</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black hidden md:block"></div>
                    <div className="text-center w-[132px] flex flex-col items-center mb-4">
                        <PiPersonArmsSpreadDuotone  className='text-[60px]'/>
                        <p className="text-4xl mb-4 mt-4 text-[#FFDC7F] font-semibold"><CountUp end={1200} />+</p>
                        <p className="font-semibold">Enrolled</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black"></div>
                    <div className="text-center w-[132px] flex flex-col items-center mb-4">
                        <FaAddressCard   className='text-[60px]'/>
                        <p className="text-4xl mb-4 mt-4 text-[#FFDC7F] font-semibold"><CountUp end={1200} />+</p>
                        <p className="font-semibold">Courses</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Counting;
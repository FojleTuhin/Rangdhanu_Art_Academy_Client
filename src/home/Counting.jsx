import CountUp  from 'react-countup';

const Counting = () => {
    return (
        <div className="bg-[#E2BFD9] ">
            <div className="max-w-6xl mx-auto py-32 px-4">
                <p className="text-3xl text-center font-bold mb-16">Purchase Unique Style Paintings</p>
                <div className="flex justify-evenly flex-wrap gap-6  mt-10">
                    <div className="text-center w-[132px]">
                        <p className="font-semibold">Digital Paintings</p>
                        <p className="text-4xl mt-8"><CountUp end={1200} />+</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black"></div>
                    <div className="text-center w-[132px]">
                        <p className="font-semibold">Abstract Paintings</p>
                        <p className="text-4xl mt-8"><CountUp end={1200} />+</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black hidden md:block"></div>
                    <div className="text-center w-[132px]">
                        <p className="font-semibold">Oil Paintings</p>
                        <p className="text-4xl mt-8"><CountUp end={1200} />+</p>
                    </div>
                    <div className="border border-x-1 border-y-4 border-black"></div>
                    <div className="text-center w-[132px]">
                        <p className="font-semibold">Portrait Paintings</p>
                        <p className="text-4xl mt-8"><CountUp end={1200} />+</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Counting;
import Image from "next/image";

const Services = () => {
    const services = [
        {
            id: "01",
            title: "UI/UX & Product Design",
            image: "/images/service-1.png",
            isFirst: true,
        },
        {
            id: "02",
            title: "Branding & Creative Design",
            image: "/images/service-2.png",
        },
        {
            id: "03",
            title: "Web & App Development",
            image: "/images/service-3.png",
        },
        {
            id: "04",
            title: "Search Engine Optimization",
            image: "/images/service-4.png",
        },
    ];

    return (
        <section className="bg-[#0404D7] py-[100px] pl-[60px] overflow-hidden">
            {/* Header Container */}
            <div className="flex justify-between items-center pr-[60px]">
                <h2 className="text-white text-[64px] font-clash font-semibold leading-[64px] tracking-[-0.03em] text-center">
                    Our Services
                </h2>
                <button className="bg-white text-black w-[224px] h-[52px] rounded-[80px] flex items-center justify-center gap-[10px] font-inter text-[16px] font-medium hover:bg-gray-100 transition-colors px-[32px] py-[20px]">
                    View All Services
                </button>
            </div>

            {/* Cards Container */}
            <div className="flex gap-6 mt-16 overflow-x-auto scrollbar-hide pr-[60px] pb-8">
                {services.map((service, index) => (
                    <div key={index} className="flex-shrink-0 flex flex-col items-start w-[380px]">
                        <div className="w-[380px] h-[400px] rounded-[24px] overflow-hidden mb-6 relative group">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {service.isFirst ? (
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-white font-archivo font-semibold text-[24px]">
                                    {service.title}
                                </h3>
                                <div className="flex gap-4">
                                    <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#0404D7] transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0404D7] hover:bg-gray-200 transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 text-white font-archivo">
                                <span className="text-[18px] opacity-80">{service.id}</span>
                                <h3 className="font-semibold text-[24px]">{service.title}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

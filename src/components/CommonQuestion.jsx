import img from '../../src/assets/men.svg'
const CommonQuestion = () => {
  return (
    <div>
      {/* title */}
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center mt-16   text-4xl font-semibold">
         
          <span className="text-pink-400">C</span>ommon
          <span className="text-pink-400">Q</span>uestion
        </h1>
        <div className=" border border-pink-400 w-20 "></div>
        <div className=" border border-pink-400 w-40 mt-1 mb-8"></div>
      </div>
      {/* question */}
      <div className=" grid lg:grid-cols-2 w-full ">
        <div>
       <img className='ml-10 w-[75%]' src={img} alt="" />
        </div>
      <div className='  w-full space-y-1 mt-3'>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What are some popular tourist spots in Indonesia <span className='text-pink-400 text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '>Popular tourist spots in Indonesia include Bali, Borobudur Temple, Komodo National Park, Raja Ampat Islands, and Yogyakarta.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What is the main attraction in Cambodia <span className='text-pink-400 text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
          <p className='text-gray-500 '>The main attraction in Cambodia is Angkor Wat, a UNESCO World Heritage Site and the largest religious monument in the world.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What are the top destinations in Vietnam <span className='text-pink-400 text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '>Some top destinations in Vietnam are Ha Long Bay, Ho Chi Minh City, Hoi An Ancient Town, Phong Nha Caves, and the Mekong Delta.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Which country features the Sundarban and Cox’s Bazar as tourist spots <span className='text-pink-400 text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
            <p  className='text-gray-500 '>Bangladesh features the Sundarban mangrove forest and Cox’s Bazar, known for having the longest natural sea beach in the world.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What are some popular destinations in Malaysia <span className='text-pink-400 text-2xl font-bold'>?</span>
          </div>
          <div className="collapse-content">
            <p className='text-gray-500 '>Popular destinations in Malaysia include Kuala Lumpur, Langkawi, Penang, Cameron Highlands, and Taman Negara National Park.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CommonQuestion;

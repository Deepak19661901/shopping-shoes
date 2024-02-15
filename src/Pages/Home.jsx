import React from 'react';
import { useSelector} from 'react-redux';
import ShoesCard from '../Components/ShoesCard';


const Home = () => {
  const shoesData = useSelector((state) => state.data.value);
  // console.log(shoesData)
  const filterdData = useSelector((state)=>state.searchData.filterdData);
  // console.log("filterdedData",filterdData)
  const renderData = filterdData.length>0 ? filterdData:shoesData
  return (
    <>

    <div className='w-full flex flex-wrap px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10  pt-24 justify-center '>
   
      {
        renderData.map((item, index) => {
          return (
            <ShoesCard item={item} key={index} />
          );
        })
      }
    </div>
    </>
  );
};

export default Home;

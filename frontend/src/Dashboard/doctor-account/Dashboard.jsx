import { useState } from 'react'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from '../../pages/Doctors/DoctorAbout';
import Profile from "./Profile";
import Appointments from './Appointments';


const Dashboard = () => {

  const {data,loading,error}=useGetProfile(`${BASE_URL}/doctors/profile/me`);
  const [tab,setTab]=useState('overview')
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader/> }
        {error && !loading && <Error/> }
        {
          !loading && !error && <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
            <Tabs tab={tab} setTab={setTab}/>
            <div className="lg:col-span-2">
              {data.isApproved==='pending' &&
              <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg '>
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox='0 0 20 20'
                    xmlns="http://www.w3.org/2000/svg" 
                  >
                                      
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>

                  </svg>
                  <span className='sr-only'>Info</span>
                  <div className='ml-3 text-sm font-medium'>To get approval, please complete your profile. We'll review manually and approve within 3 days.</div>
                </div> }


                {tab=='overview' && <div>
                  <div className='flex items-center gap-4 mb-10'>
                    <figure className='max-w-[200px] max-h-[200px]'>
                      <img src={data?.photo} alt="" className="w-full" />
                    </figure>
                  
                    <div>
                      <span className='bg-[#CCF0F3] text-irisBlueColor 
                      py-1 px-4 lg:py-2 lg:px-6  rounded text-[12px] 
                      leading-4 lg:text-[16px] lg:leading-6 
                      font-semibold'>{data.specialization}</span>

                      <h3 className="text-[22px] leading-9 
                      font-bold text-headingColor mt-3">{data.name}</h3>

                      <div className="flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                          <img src={starIcon } alt=""  />
                          {data.averageRating}
                        </span>
                        <span className="flex items-center gap-[6px] text-textColor text-[14px] 
                        leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                        ({data.totalRating}) 
                        </span>
                      </div>
                      <p className='text__para font-[15px] lg:max-w-[390px] leading-6'>
                        {data?.bio}
                        </p>
                    </div>
                  
                  </div>
                  <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
                  </div>}
                {tab=='appointments' && (
                  <Appointments appointments={data.appointments}/>
                  )}
                {tab=='settings' && <Profile doctorData={data} />}

            </div>
            </div>
        }



      </div>

    </section>
  )
};

export default Dashboard;

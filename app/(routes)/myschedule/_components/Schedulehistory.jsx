import React from 'react'
import Image from 'next/image'
import { CiUser } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
/*import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';*/
const Schedulehistory = ({ scheduleHistory }) => {
  console.log(scheduleHistory);
  const deleteBooking = (ScheduleId) => {
    console.log(ScheduleId);
    GlobalApi.deleteBooking(ScheduleId).then(resp => {
      console.log(resp);
      if (resp) {
        toast('Deleted Successfully!');
      }
    }, (e) => {
      toast('Error');
    })
  }
  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          {scheduleHistory.map((schedule, index) => (
              <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5'>
                {schedule?.businessList?.name && <Image src={schedule.businessList.images[0].url} height={120}
                  width={120} className='rounded-lg' alt='image' />}
                <div className='flex flex-col'>
                  <h2 className='font-bold'>{schedule?.businessList?.name}</h2>
                <h2 className='flex gap-2 text-purple-800'>
                  <CiUser className='mt-1' />{schedule.businessList?.contactPerson}</h2>
                <address className='flex gap-2 text-gray-800'><FiMapPin className='mt-1' />
                  {schedule.businessList?.address}</address>
                <h2 className='flex gap-2 text-blue-600'><FaRegCalendarAlt className='mt-1' />{`Service on: ${schedule?.date}`}</h2>
                <h2 className='flex gap-2 text-blue-600'><FaRegClock className='mt-1' />{schedule?.time}</h2>
                {/*<Button variant='destructive' onClick={() => deleteBooking(schedule?.id)}>Delete</Button>*/}
                </div>
              </div>
          ))
        }
      </div>
  )
}

export default Schedulehistory
'use client'
import React, { useEffect,useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GlobalApi from '@/app/_services/GlobalApi'
import Schedulehistory from './_components/Schedulehistory'
import { useSession } from 'next-auth/react'

const MySchedule = () => {
    const { data } = useSession();
  const [scheduleHistory, setScheduleHistory] = useState([]);
  console.log(scheduleHistory);
    useEffect(() => {
        data&&getUserScheduleHistory();
    }, [data]);
    /** Getting User ServiceSchedule History **/
    const getUserScheduleHistory = () => {
      GlobalApi.getUserScheduleHistory(data?.user?.email).then(resp => {
        console.log(resp);
        setScheduleHistory([...resp.bookings])
      })
  }
  /** Filtering Data as per the type  */
  const filterData = (type) => {
    const filteredResult = scheduleHistory.filter(item => type == 'scheduled' ?
      new Date(item.date) > new Date() : new Date(item.date) < new Date());
    return filteredResult;
  }
  return (
      <div className='my-10 mx-5 md:mx-36'><Tabs defaultValue="scheduled" className="w-full">
          <h2 className='font-bold text-[20px] my-2'>My Schedules</h2>
    <TabsList className='w-full justify-start'>
      <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
      <TabsTrigger value="completed">Completed</TabsTrigger>
    </TabsList>
    <TabsContent value="scheduled"><Schedulehistory scheduleHistory={filterData('scheduled')}/></TabsContent>
    <TabsContent value="completed"><Schedulehistory scheduleHistory={filterData('completed')}/></TabsContent>
    </Tabs>
   </div>
  )
}



export default MySchedule



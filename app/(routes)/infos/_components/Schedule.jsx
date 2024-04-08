
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from "sonner"
import { useSession } from 'next-auth/react'
import moment from 'moment'
const Schedule = ({ children,businessDetail }) => {
  const [date, setDate] = useState(new Date().now);
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const { data }   = useSession();
    useEffect(() => {
    },[data])

  console.log(bookedSlot);
  useEffect(() => { 
    getTime();
  }, []);
  useEffect(() => {
    date&&getBookedSlot();
  },[date])
  const getTime = () => {
    const timeQueue = [];
    for (let i = 10; i < 12;i++){
      timeQueue.push({
        time: i + ":00 AM"
      });
      timeQueue.push({
        time: i + ":30 AM"
      })
      timeQueue.push({ time: "12:00 PM" });
      timeQueue.push({ time: "12:30 PM"});
    }
    for (let i = 1; i <= 6; i++){
      timeQueue.push({
        time: i + ":00 PM"
      })
      timeQueue.push({
        time: i + ":30 PM"
      })
    }
    setTimeSlot(timeQueue);
  } 
  /* GetBookedSlot */
  const getBookedSlot = () => {
    GlobalApi.getBookedSlot(businessDetail.id,moment(date).format('DD-MMM-YYYY')).then(resp => {
      console.log(resp);
      setBookedSlot([...bookedSlot, ...resp.bookings]);
    });
  }
  /*Check Booked Slot*/
  const isbooked = (bookedTime) => {
    return bookedSlot.find(item =>item.time==bookedTime)
  }

  const scheduleBooking = () => {
    console.log(businessDetail.id);
    GlobalApi.createNewSchedule(businessDetail.id, moment(date).format('DD-MMM-YYYY'), selectedTime,data?.user?.email,data?.user?.name)
      .then(resp => {
        console.log(resp);
        /* Toast Message */
        if (resp) {
          
          toast("Service scheduled successfully!");
          setDate('');
          setSelectedTime('');
          
        }
      }, (e) => {
        // Error toast Message
         toast("Error while service scheduled");
      })
    
  }
  return (
      <div><Sheet asChild>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='overflow-auto'>
        <SheetHeader>
          <SheetTitle>Schedule Service</SheetTitle>
          <SheetDescription>
                      Select Date and Time slot to schedule the service.
                      {/* Date Picker */}
                      <div className='flex flex-col gap-5 items-baseline'>
                          <h2 className='my-2 font-bold'>Select Date</h2>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
            </div>
            { /* Time Slot Picker */}
              <h2 className='my-5 font-bold'>Select Time Slot</h2>
              <div className='grid grid-cols-3 gap-2'>
              {timeSlot.map((timemap, index) => (
                <Button key={index} disabled={isbooked(timemap.time)} onClick={()=>setSelectedTime(timemap.time)} variant='outline' className={`border rounded-full p-2 px-3 hover:bg-primary hover:text-white ${selectedTime==timemap.time&&'bg-primary text-white'}`}>{timemap.time}</Button>
              ))}
              </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <div className='flex gap-5 mt-2'>
              <Button disabled={!(date && selectedTime)} onClick={()=>scheduleBooking()}>Schedule</Button>
              <Button variant='destructive'>Cancel</Button>
            </div>
              </SheetClose>
            </SheetFooter>
      </SheetContent>
    </Sheet></div>
  )
}

export default Schedule
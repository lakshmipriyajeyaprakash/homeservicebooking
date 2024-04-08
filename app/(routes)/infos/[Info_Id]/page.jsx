'use client'
import React,{useEffect,useState} from 'react'
import { signIn, useSession } from 'next-auth/react'
import GlobalApi from '@/app/_services/GlobalApi'
import AboutBusiness from '../_components/AboutBusiness'
import BusinessDetail from '../_components/BusinessDetail'
import PrescribedBusiness from '../_components/PrescribedBusiness'

const BusinessInfo = ({ params }) => {
    /* Fetching Session Authentication from next-auth/react to display/hide business details */
    const { data, status } = useSession(); // Session data is the context hook will be processed in the client side.
    useEffect(() => {
        checkAuthStatus();
    }, [])
    const checkAuthStatus = () => {
        if (status === 'loading') {
            return <p>Loading...</p>
        }
        if (status === 'unauthenticated') {
            signIn('descope');
        }
    }
    /* Fetching business details */
    const [businessDetail, setBusinessDetail] = useState({});
    useEffect(() => {
        params&&getBusinessById();
    },[]);
    const getBusinessById = () => {
        GlobalApi.getBusinessById(params.Info_Id).then(resp => {
            setBusinessDetail(resp.businessList);
            console.log(resp.businessList);
        })
    }
    return (status === 'authenticated' && businessDetail &&
        <div className='py-8 md:py-20 px-5 md:px-36'>
            <AboutBusiness businessDetail={businessDetail} />
            <div className='grid grid-cols-3 mt-16'>
                <div className='col-span-3 md:col-span-2 order-last md:order-first'>
                    <BusinessDetail businessDetail={businessDetail}/>
                </div>
                <div className=''>
                    <PrescribedBusiness businessDetail={businessDetail}/>
                </div>
            </div>
        </div >
    )
}

export default BusinessInfo
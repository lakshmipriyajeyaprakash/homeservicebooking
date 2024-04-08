import React from 'react';
import Image from 'next/image';

const BusinessDetail = ({ businessDetail }) => {
  return (
    <div>
      <h2 className='font-bold text-[25px]'>Job Detail</h2>
      {businessDetail?.name && (
        <div className='mt-4 text-gray-600 text-lg max-w-44 md:max-w-full'>{businessDetail.about}</div>
      )}

      <h2 className='mt-4 font-bold text-[25px]'>Gallery</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {businessDetail?.images?.map((img, index) => (
          img?.url && <Image key={index} src={img.url} className='rounded-lg' alt='galleryImages' width={700} height={300} />
        ))}
      </div>
    </div>
  );
};

export default BusinessDetail;

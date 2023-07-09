import React from 'react'


const GiftCard = ({giftCard}) => {
  return (
    <div className='w-[120px] h-[100px] sm:w-[300px] sm:h-[200px] flex gap-0 flex-col justify-between  rounded-sm' key={giftCard.title}>
            <div className='w-full h-[160px] '>
                <img src={giftCard.src} alt="" className='h-full w-full' />
            </div>
            <h1 className='text-sm sm:text-lg tracking-wide font-medium'>{giftCard.title}</h1>
    </div>
  )
}

export default GiftCard
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="mx-auto w-full ">
      <div className=" w-full flex mt-10 md:mt-40 space-x-6 justify-center items-center ">
        <a href="https://web.facebook.com/profile.php?id=100077289474998&ref=page_internal&paipv=0&eav=AfYTBWT_OfcH5hXU8QeLT_MXj7LolOBdRcJxsW42PudovMvhJTeaV21iPROAraoTgwM" target="_blank">
          <Image src={'/facebook.svg'} width={50} height={50} color='#AC1400'></Image>

        </a>
        <a href="https://www.instagram.com/ceylonmaritime/?fbclid=IwAR08WeEjUCgFQSc4YsRpsdfKpaPpeXsn3xMv8zmu9jFGNfrTAm7s0QpuLhY" target="_blank">
          <Image src={'/instagram.svg'} width={50} height={50} color='#AC1400'></Image>
        </a>
      </div>
    </div>
  )
}

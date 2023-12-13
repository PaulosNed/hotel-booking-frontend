"use client"

import { ThreeDots } from  'react-loader-spinner'

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3468DF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}

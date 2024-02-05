"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import AccordionItem from "./AccordionItem"



const TabsDetail = ({accordionData}: {accordionData: any[]}) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="w-full flex flex-col md:flex-row md:gap-4 md:justify-center h-[180px] md:h-fit">
            <TabsTrigger value="story" className="capitalize">
              our story
            </TabsTrigger>
            <TabsTrigger value="bar" className="capitalize">
              Bar & Resturant
            </TabsTrigger>
            <TabsTrigger value="wellness" className="capitalize">
              Wellness center
            </TabsTrigger>
            <TabsTrigger value="meeting" className="capitalize">
              Meeting & Events
            </TabsTrigger>
            <TabsTrigger value="sister" className="capitalize">
              Sister Company
            </TabsTrigger>
          </TabsList>
          <div className="">
            {accordionData.map((accordion: any) => (
              <TabsContent value={accordion.value} key={accordion.value}>
                <AccordionItem
                  desc={accordion.desc}
                  image1={accordion.image1}
                  image2={accordion.image2}
                  image3={accordion.image3}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
  )
}

export default TabsDetail
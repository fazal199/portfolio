import Heading from '@/components/Heading'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { projectContent } from '../../../../constants'

const ProjectsPage = () => {


  return (
    <section className='mt-20 py-24'>
      <Heading content="All Projects" />
      <div className="grid grid-cols-3 gap-12 mt-16 max-w-7xl mx-auto laptop:gap-x-8 tablet:grid-cols-2 mobile:grid-cols-1">

        {
          projectContent.map((item:any) => (<ProjectCard key={item.id} id={item.id} heading={item.heading} content={item.content} imgUrl={item.imgUrl} />))
        }
        
       
      </div>
    </section>
  )
}

export default ProjectsPage

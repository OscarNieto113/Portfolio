import { FunctionComponent } from 'react'
import { GeneralSkill } from '../data/generalSkills'

const ServiceCard: FunctionComponent<{ service: GeneralSkill }> = ({
   service: { Icon, title, about },
}) => {
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-green' />
         <div className=''>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
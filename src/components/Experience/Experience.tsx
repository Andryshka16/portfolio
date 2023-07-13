import { lapchess, wordScope, shopify } from 'config/projects'
import Project from './components/Project'

const Experience = () => (
    <div className='m-auto mt-36 w-fit text-center' id='experience'>
        <h1 className='text-6xl font-bold text-[#05CEC2]'>Experience</h1>
        <p className='m-auto mt-10 w-[800px] text-2xl font-medium text-white'>
            Since 2021, I've gained programming experience through olympiads, projects, freelancing,
            and coding challenges. These experiences improved my problem-solving skills and expanded
            my tech knowledge. I am ready to make an effective contribution to the future of
            programming.
        </p>
        <div className='m-auto mt-10 flex w-fit gap-8'>
            <Project project={lapchess} />
            <Project project={shopify} />
            <Project project={wordScope} />
        </div>
        <p className='mt-4 text-gray-500 font-semibold text-lg'>* hosted on free platforms, so loading may take some time :)</p>
    </div>
)

export default Experience

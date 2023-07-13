import panda from 'assets/panda.png'

const About = () => (
    <div className='mt-36 w-fit m-auto text-center' id='about'>
        <h1 className='text-[#05CEC2] text-6xl font-bold'>Hi, i am Andrey Lapchik</h1>
        <h2 className='mt-4 text-white text-3xl font-semibold'>Full-stack web developer</h2>
        <p className='mt-5 w-[650px] text-2xl text-white font-medium'>
            17-year-old computer science student from Latvia specializing in full-stack development,
            and passionate about creating efficient web applications.
        </p>
        <img src={panda} className='mt-8 w-72 h-72 rounded-full m-auto' />
    </div>
)

export default About

import { DesktopComputerIcon, FilmIcon } from "@heroicons/react/solid";
import Card from "../../components/Card";
import Title from "../../components/Title";

const Skill = (): JSX.Element => {

    const SKILLS = [
        {
            name: 'Skill 1',
            description: 'lorem temcp dasd do dask while nnot have to you must yeeks',
            logo: 'computer'
        },
        {
            name: 'Skill 2',
            description: 'A short description',
            logo: 'computer'
        },
        {
            name: 'Skill 3',
            description: 'lorem temcp dasd do dask while nnot have to you must yeeks must be a long one to test how it works in smaller screens, lorem temcp dasd do dask while nnot have to you must yeeks must be a long one to test how it works in smaller screens',
            logo: undefined
        }
    ]

    return (
        <div className='bg-indigo-100'>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
                <Title text='Specialties' />

                <div className='flex flex-col md:flex-row justify-around space-x-0 md:space-x-2'>
                    {/* only show top 3 skills */}
                    {SKILLS.slice(0, 3).map((skill, idx) => (
                        <div id={`skill-${idx}`} className='w-full h-80 md:w-80 mb-4'>
                            <Card variant='light'>
                                <div className='flex flex-col w-full h-full p-8 text-center'>
                                    <div className='flex justify-center'>
                                        <div className='flex justify-center items-center rounded-full bg-indigo-500 w-24 h-24 border-4 border-indigo-200 mb-4'>
                                            {skill.logo === 'computer' ? (
                                                <DesktopComputerIcon className='text-white h-12 w-12 mb-2' />
                                            ) : (
                                                <FilmIcon className='text-white h-12 w-12 mb-2' />
                                            )}
                                        </div>
                                    </div>
                                    <h1 className='font-bold'>{skill.name}</h1>
                                    <hr className='my-2' />
                                    <p className='text-sm text-clip overflow-hidden'>{skill.description}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill;
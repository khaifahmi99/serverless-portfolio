import { CheckCircleIcon } from "@heroicons/react/solid";
import Title from "../../components/Title";

const Contact = (): JSX.Element => {
    // Fetch from JSON
    const primaryEmail = 'user@example.com';
    const secondaryEmail: string | undefined = 'cc@example.com';

    const subject = 'Reaching Out from Portfolio!'

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 pt-8 pb-28 my-16 bg-indigo-500 shadow-xl rounded-xl text-white'>
            <Title text='Contact' variant='light' />
            <div className='flex lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl italic font-bold mb-8'>
                        Let's talk!
                    </h1>
                    <div className='font-bold'>
                        <span className='pr-2'>Do you have any questions about me? You can</span>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <a 
                                href={`mailto:${primaryEmail}?${secondaryEmail ? `cc=${secondaryEmail}&` : ''}subject=${subject}`} 
                                className="relative text-white hover:underline italic"
                            >
                                shoot me an email
                            </a>
                        </span>
                        <span className='pl-2'>{`at ${primaryEmail}. I can also be reached via these platform, so let's start connecting!`}</span>
                    </div>
                    <div className='flex flex-row pt-4'>
                        <CheckCircleIcon className={`h-8 w-8 mr-2 hover:text-indigo-300`}/>
                        <CheckCircleIcon className={`h-8 w-8 mr-2 hover:text-indigo-300`}/>
                        <CheckCircleIcon className={`h-8 w-8 mr-2 hover:text-indigo-300`}/>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default Contact;
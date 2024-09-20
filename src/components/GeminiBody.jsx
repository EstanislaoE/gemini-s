import React from 'react';
import { CircleUserRound, Compass } from 'lucide-react';


const GeminiBody = () => {
    return (
        <div className='flex-1 min-h-screen pb-[15vh] relative'>
            <header className='flex items-center justify-between p-5 md:text-xl text-gray-400'>
                <p>Gemini</p>
                <CircleUserRound size={28} className='text-softTextColor' />

            </header>
            <main className='max-w-[900px] m-auto my-12 px-4'>
                <h1 className='text-4xl md:text-5xl font-medium text-center'>
                    <p>
                        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>Hello Ese</span>
                    </p>
                    <p>How are you ?</p>
                </h1>
                <div>
                    <div className='h-28 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer'>
                        <p>Suggest beatiful places for place</p>
                        <Compass size={35} className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full ' />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GeminiBody;


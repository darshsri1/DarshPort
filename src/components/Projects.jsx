import React from "react";
import Ai_img from '../assets/Ai_img.jpg';
import hindify from '../assets/hindify.jpg';
import guideera from '../assets/guideera.png'; // Ensure you have the GuideEra image in the assets folder
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Ai_img',
        description: '• An app that uses AI to generate unique and stunning images based on user inputs.\n• Integrated OpenAI API for advanced image generation capabilities.\n• Developed backend services with Express and MongoDB to handle user inputs and manage generated images.',
        image: Ai_img,
        git: 'https://github.com/darshsri1/Ai_img_gen',
        technologies: ['MongoDb', 'ReactJS', 'NodeJS', 'Express', 'OpenAI API']
    },
    {
        title: 'Hindify',
        description: '• Users can input a YouTube video URL, specify a question, and select a target language. The application retrieves the transcript using the YouTube API, translates it using Google Translate, and generates an audio file using Google Text-to-Speech (gTTS).\n• Implemented the backend using Flask to handle requests and process data.\n• Ensured proper data handling and format with Manifest JSON.',
        image: hindify,
        git: 'https://github.com/darshsri1/Voice-translator',
        technologies: ['React JS', 'tailwind CSS', 'Flask', 'transcribe API', 'manifest.json']
    },
    {
        title: 'GuideEra',
        description: '• GuideEra is an educational platform designed to offer personalized learning experiences.\n• Integrated various APIs for real-time data fetching and interactive features.\n• Utilized a combination of modern web technologies to create a responsive and user-friendly interface.',
        image: guideera,
        git: 'https://github.com/darshsri1/GuideEra',
        technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Educational API']
    }
];

export default Projects;

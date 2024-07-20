import { AiFillHome as HomeIcon } from "react-icons/ai";
import { IoDocumentAttach as ResumeIcon } from "react-icons/io5";
import { GrProjects as ProjectsIcon } from "react-icons/gr";
import Link from 'next/link';

const MobileNav = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white shadow-lg z-50">
            <div className="flex flex-row items-center justify-around py-2">
                <Link href="/" passHref legacyBehavior>
                    <a className="flex flex-col items-center w-1/3 text-gray-600 hover:text-jade-500">
                        <HomeIcon className="text-2xl" />
                        <span className="text-xs">Home</span>
                    </a>
                </Link>

                <Link href="/#projects" passHref legacyBehavior>
                    <a className="flex flex-col items-center w-1/3 text-gray-600 hover:text-jade-500">
                        <ProjectsIcon className="text-2xl" />
                        <span className="text-xs">Projects</span>
                    </a>
                </Link>

                <a
                    className="flex flex-col items-center w-1/3 text-gray-600 hover:text-jade-500"
                    href="https://drive.google.com/file/d/14EDTqJ5ZTYlb66K9Crup_tGkka_xxw7F/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ResumeIcon className="text-2xl" />
                    <span className="text-xs">Resume</span>
                </a>
            </div>
        </div>
    );
};

export default MobileNav;

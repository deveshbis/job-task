import { BiSupport } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaDollarSign, FaGraduationCap } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { IoIosStats } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";


const Dashboard = () => {
    return (
        <div>
            <nav
                className="bg-[#f7f7f8] h-screen fixed top-0 left-0 min-w-[260px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">
                <a href="javascript:void(0)"
                    className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                    <GoSun className="w-[32px] h-[32px] mr-4 text-blue-700"/>
                    <h1 className="text-3xl"><span className="text-blue-600">ON</span>Course</h1>
                </a>

                <ul className="space-y-3 flex-1 mt-6">
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                                viewBox="0 0 512 512">
                                <path
                                    d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                                    data-original="#000000" />
                            </svg>
                            <span>Overview</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                            <IoBookOutline className="w-[18px] h-[18px] mr-4" />
                            <span>My Course</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                            <FaGraduationCap className="w-[18px] h-[18px] mr-4" />
                            <span>Completed</span>

                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                            <BsBox className="w-[18px] h-[18px] mr-4" />
                            <span>Financial Aid</span>

                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                            <FaDollarSign className="w-[18px] h-[18px] mr-4" />
                            <span>Transections</span>

                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                            <IoIosStats className="w-[18px] h-[18px] mr-4" />
                            <span>Reports</span>

                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all relative">
                            <ImStatsDots className="w-[18px] h-[18px] mr-4" />
                            <span>Statistics</span>

                        </a>
                    </li>
                </ul>

                <ul className="space-y-3 mt-3">
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                            <BiSupport className="w-[18px] h-[18px] mr-4" />
                            <span>Support</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"
                            className="text-black hover:text-[#077fbb] text-sm flex items-center hover:bg-gray-200 rounded px-4 py-3 transition-all">
                            <CiSettings className="w-[18px] h-[18px] mr-4" />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
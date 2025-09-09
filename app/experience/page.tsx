import Image from "next/image";
import Navigation from "../../components/Navigation";
import LinkIcon from "../../public/link.svg";



export default function Home() {
    return (
        <main className="items-center">
            <div className="red-divider"></div>
            <Navigation />
            <h1 className="notebook-header mb-10 mt-10">
                Work Experience
            </h1>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="notebook-row"></div>
            <div className="container accordion-container experience mx-auto">
                <div className=" bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold"><a className="text-blue-700 inline-block external-link" target="_blank" href="https://www.finoptima.ai/">FinOptima<Image alt="external link" width={20} src={LinkIcon} className='fill-red-100 inline-block' /></a></span><h2>September 2025 - Current</h2>
                        </div>
                        <span className="italic font-light text-base font-bold">Front-end Engineer</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>
                                Redesigned and built marketing page
                            </li>
                            <li>
                                Built out user interface, client components and panels
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold"><a className="text-blue-700 inline-block external-link" target="_blank" href="https://goldenspringdesigns.com/">Golden Spring Designs<Image alt="external link" width={20} src={LinkIcon} className='fill-red-100 inline-block' /></a></span><h2>June 2025 - July 2025</h2>
                        </div>
                        <span className="italic font-light text-base font-bold">Web Developer & Designer </span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>
                                Designed and built marketing site with NextJS, Tailwind
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold"><a className="text-blue-700 inline-block external-link" target="_blank" href="https://redymr.com/">Redymr<Image alt="external link" width={20} src={LinkIcon} className='fill-red-100 inline-block' /></a></span><h2>September 2024 - November 2024</h2>
                        </div>
                        <span className="italic font-light text-base font-bold">Web & Mobile App Developer </span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>
                                Redesigned pages to enhance user experience and flow
                            </li>
                            <li>
                                Optimized pages to improve load times and meet web standards
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold"><a className="text-blue-700 inline-block external-link" target="_blank" href="https://web.archive.org/web/20230920140450/https://revelsystems.com/">Revel Systems<Image alt="external link" width={20} src={LinkIcon} className='fill-red-100 inline-block' /></a></span>
                            <span>November 2019 - June 2024</span>
                        </div>
                        <span className="italic font-light text-base font-bold">Web Developer</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>Built out responsive pages on Wordpress and Next utilizing HTML, SASS, JavaScript </li>
                            <li>Developed internal CRM using AWS, DynamoDB, Lambda</li>
                            <li>Integrated APIs to showcase customer reviews, feedback and news releases</li>
                            <li>Tested and optimized website pages for loading speed, Core Web Vitals, cross-browser
                                functionality and ADA compliance</li>
                            <li>Built deployment pipelines to AWS with Terraform</li>
                            <li>Developed an interactive hardware page to support sales by showcasing company products</li>
                            <li>Received Q3 2020 Sapphire Award for leading the redesign and building of hardware page</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <h2 className="font-bold">Zenith Prep Academy</h2><h2>September 2019 - April 2020</h2>
                        </div>
                        <span className="italic font-light text-base">Web & Software Development Instructor </span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>Instructed students in JavaScript, PHP , HTML, CSS, jQuery, MySQL, APACHE, XAMPP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

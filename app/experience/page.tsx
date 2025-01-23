import Image from "next/image";
import Navigation from "../../components/Navigation";


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
            <div className="container accordion-container mx-auto">
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <h2 className="font-bold">Redymr</h2><h2>September 2024 - November 2024</h2>
                        </div>
                        <span className="italic font-light text-base font-bold">Web & Mobile App Developer </span>
                    </div>
                    <div className="collapse-content">
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
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold">Revel Systems</span>
                            <span>November 2019 - June 2024</span>
                        </div>
                        <span className="italic font-light text-base font-bold">Web Developer</span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>Built out responsive pages on Nuxt utilizing HTML, SASS, JavaScript </li>
                            <li>Integrated APIs to showcase customer reviews, feedback and news releases</li>
                            <li>Tested and optimized website pages for loading speed, Core Web Vitals, cross-browser
                                functionality and ADA compliance</li>
                            <li>Built deployment pipelines to AWS with Terraform</li>
                            <li>Migrated site from Wordpress to Nuxt 3.x</li>
                            <li>Developed an interactive hardware page to support sales by showcasing company products</li>
                            <li>Received Q3 2020 Sapphire Award for leading the redesign and building of hardware page</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <h2 className="font-bold">Zenith Prep Academy</h2><h2>September 2019 - April 2020</h2>
                        </div>
                        <span className="italic font-light text-base">Web & Software Development Instructor </span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>Instructed students in JavaScript, PHP , HTML, CSS, jQuery, MySQL, APACHE, XAMPP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

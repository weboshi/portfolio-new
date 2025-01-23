import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import LinkIcon from "../../public/link.svg";


export default function Home() {
    return (
        <main className="items-center">
            <Navigation />
            <h1 className="notebook-header mb-10 mt-10">
                Personal Projects
            </h1>
            <div className="red-divider"></div>
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
                        <div className="text-xl font-medium flex justify-between ">
                            <h2 className="font-bold flex">ConventionMaker</h2><h2></h2>
                        </div>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>React App<a className="external-link inline-block" href="https://d1yprzvrrxd9hi.cloudfront.net/"><Image alt="external link" width={20} src={LinkIcon} className='fill-red-100' /></a> that allows users to create, search and host landing pages to promote their conventions</li>
                            <li>Utilizes AWS lambda and cloud services, DynamoDB, S3 and CloudFront</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between ">
                            <h2 className="font-bold">Mapboard</h2><h2></h2>
                        </div>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>App that allows users to create points of interests on a map. </li>
                            <li>Constructed mobile responsive front end using react bootsrap components and media queries.</li>
                            <li>Implemented JSON Web Tokens for user registration and authorization.</li>
                            <li>Integrated GoogleMaps API to create points of interest that can be upvoted/downvoted.</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <span className="text-xl block font-bold">PolitSearch</span>
                            <span></span>
                        </div>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>App that allows users to create points of interests on a map. </li>
                            <li>Constructed mobile responsive front end using react bootsrap components and media queries.</li>
                            <li>Implemented JSON Web Tokens for user registration and authorization.</li>
                            <li>Integrated GoogleMaps API to create points of interest that can be upvoted/downvoted.</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-secondary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        <div className="text-xl font-medium flex justify-between">
                            <h2 className="font-bold">Tokyo Music Search</h2><h2></h2>
                        </div>

                        <span className="italic font-light text-base">React App </span>
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>A react app that lets users search Tokyo's most popular music venues for artists that are performing</li>
                            <li>Utilizes Cheerio to do a live scrape of the venue's schedules, ensuring that performance info is up to date</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

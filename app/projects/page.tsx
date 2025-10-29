import Image from "next/image";
import LinkIcon from "../../public/link.svg";


export default function Home() {
    return (
        <main className="items-center">
            <h1 className="notebook-header mb-10 mt-10">
                Personal Projects
            </h1>
            <div className="red-divider"></div>
            <div className="container accordion-container mx-auto projects">
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="font-bold text-xl">Buydol</h2>
                        <span className="italic font-light text-base">NextJS, Postgres, Prisma App</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>Full-stack App<a className="external-link inline-block" href="https://buydol.com/"><Image alt="external-link" width={20} src={LinkIcon} className='fill-red-100 projects' /></a> that allows users to login with sso, create posts, like posts, follow users and receive notificaitons.</li>
                            <li>Utilizes NextJS, Postgres, Neon, Serverless backend, Shadcn, Tailwind, Prisma ORM</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="font-bold text-xl">Demo Patient Panel UI</h2>
                        <span className="italic font-light text-base">NextJS Demo</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>NextJS App<a className="external-link inline-block" href="https://main.d2dcllq3ph85wl.amplifyapp.com/"><Image alt="external-link" width={20} src={LinkIcon} className='fill-red-100 projects' /></a> that allows users to create, search and host landing pages to promote their conventions</li>
                            <li>Utilizes NextJS, Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="font-bold text-xl">ConventionMaker</h2>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>React App<a className="external-link inline-block" href="https://d1yprzvrrxd9hi.cloudfront.net/"><Image alt="external-link" width={20} src={LinkIcon} className='fill-red-100 projects' /></a> that allows users to create, search and host landing pages to promote their conventions</li>
                            <li>Utilizes AWS lambda and cloud services, DynamoDB, S3 and CloudFront</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="font-bold text-xl">Mapboard</h2>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>App that allows users to create points of interests on a map. </li>
                            <li>Constructed mobile responsive front end using react bootsrap components and media queries.</li>
                            <li>Implemented JSON Web Tokens for user registration and authorization.</li>
                            <li>Integrated GoogleMaps API to create points of interest that can be upvoted/downvoted.</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <span className="text-xl block font-bold">PolitSearch</span>
                        <span className="italic font-light text-base">React App</span>
                    </div>
                    <div className="collapse-content visible">
                        <ul>
                            <li>App that allows users to create points of interests on a map. </li>
                            <li>Constructed mobile responsive front end using react bootsrap components and media queries.</li>
                            <li>Implemented JSON Web Tokens for user registration and authorization.</li>
                            <li>Integrated GoogleMaps API to create points of interest that can be upvoted/downvoted.</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="font-bold text-xl">Tokyo Music Search</h2>
                        <span className="italic font-light text-base">React App </span>
                    </div>
                    <div className="collapse-content visible">
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

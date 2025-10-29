import Image from "next/image";
import PlanlyLogo from "../../public/ui-images/Planly_Check_Version_Transparent.png";
import PlanlyLogo2 from "../../public/ui-images/Planly_PA.png";


export default function Home() {
    return (
        <main className="items-center">
            <div className="red-divider"></div>
            <h1 className="notebook-header mb-10 mt-10">
                Designs
            </h1>

            <div className="container mx-auto px-4 mb-20 font-['Inter',sans-serif] relative z-10">
                {/* Two column layout: Description on left, Main Dashboard on right */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
                    <div className="sticky-note-styling w-auto relative">

                        <div className="flex justify-between items-center">
                            <div className="">
                                <p className="font-bold text-lg">Planly - Travel Planning App</p>
                            </div>
                            <a
                                href="https://www.figma.com/proto/3gUBtz9XpVp0eSZT0ySUMp/PLANLY-UI?page-id=0%3A1&node-id=1-3&p=f&viewport=220%2C-3484%2C0.72&t=dguKAaGUobPbm8rv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1"
                                target="_blank"
                                className="bg-blue-700 text-nowrap text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-900 transition-colors text-sm"
                            >
                                View Figma Prototype
                            </a>
                        </div>
                        <p className="text-sm w-full lg:w-1/2">Figma and logo design for a collaborative travel planning app that helps friends organize trips together through shared itineraries, group chat, task assignments, and member management.
                        </p>
                        <p className="text-base font-bold mt-8 mb-2">Logo Variants:</p>
                        <div className="flex justify-start items-center">
                            <Image
                                src={PlanlyLogo}
                                alt="Planly Logo"
                                className="w-40 mr-6"
                            />
                            <Image
                                src={PlanlyLogo2}
                                alt="Planly Logo"
                                className="w-40"
                            />
                        </div>

                        <div className="mt-10">
                            <video
                                controls
                                className="w-full rounded-lg shadow-lg"
                                preload="metadata"
                            >
                                <source src="/ui-images/Planly_UI_Video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

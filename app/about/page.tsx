import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import profilePic from '../../public/about_me.jpg'


export default function Home() {
    return (
        <main className="items-center">
            <Navigation />
            <h1 className="notebook-header mb-10 mt-10">
                About Me
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
            <div className="columns-2 sticky-note-position">
                <div className="sticky-note-styling -rotate-[5deg]">
                <Image
                    src={profilePic}
                    alt="Me and my dog"
                    width={"400"}
                />
                </div>
                <div className="sticky-note-styling">
                    <p>Random facts</p>
                    <ul>
                        <li>I enjoy weightlifting</li>
                        <li>Lawyer turned developer</li>
                        <li>I love eating</li>
                        <li>I have a corgi named Hotpot</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

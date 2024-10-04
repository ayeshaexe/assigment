// country’s details.
import Link from "next/link"
export default function Country () {
    return (
        <div className="font-mono">
            <h1><b className="bg-blue-300 text-xl">.Countries.</b></h1>
            <h2><b className=" bg-blue-200 text-xl">.List of Countries.</b></h2>
            <ul className="text-blue-400">
                <Link className="no-underline hover:underline" href="/country/pakistan"><li><b>1: Pakistan</b></li></Link>
                <Link className="no-underline hover:underline" href="/country/france"><li><b>2: France</b></li></Link>
                <Link className="no-underline hover:underline" href="/country/italy"><li><b>3: Italy</b></li></Link>
                <Link className="no-underline hover:underline" href="/country/switzerland"><li><b>4: Switzerland</b></li></Link>
                <Link className="no-underline hover:underline" href="/country/turkey"><li><b>5: Turkey</b></li></Link>
                <Link className="no-underline hover:underline" href="/">BACK TO EXPLORE COUNTRIES</Link>
            </ul>
        </div>
    )
}
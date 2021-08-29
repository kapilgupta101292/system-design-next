import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/system_design.png" width={77} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}
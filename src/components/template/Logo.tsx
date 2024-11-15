import Link from "next/link";
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/">
            <Image className="mt-2" src="./logo.svg" alt="Logo da NewLife" width={80} height={80}/>
        </Link>
    )
}
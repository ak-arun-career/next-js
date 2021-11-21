import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}
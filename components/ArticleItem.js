import React from 'react';
import Link from 'next/link';

export default function ArticleItem({userId, firstName}) {
    return (
        <Link href={`/users/${userId}`}>
            {firstName}
            {/* <>
                <p>{joke}</p>
                <p>{category}</p>
            </> */}
        </Link>
    )
}
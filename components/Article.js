import React from 'react';
import ArticleItem from './ArticleItem';

export default function Article({user}) {
    return (
        <li>
            <ArticleItem userId={user.id} firstName={user.first_name} email={user.email} />
        </li>
    )
}
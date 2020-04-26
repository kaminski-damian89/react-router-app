import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at expedita? Nobis excepturi molestias non! Repellendus velit non quia officia voluptate id ea, temporibus nostrum aspernatur inventore, facilis, similique amet!',
    },
    {
        id: 2,
        title: 'Czym jest teoria chaosu?',
        author: 'Zbigniew Kowalski',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at expedita? Nobis excepturi molestias non! Repellendus velit non quia officia voluptate id ea, temporibus nostrum aspernatur inventore, facilis, similique amet!',
    },
    {
        id: 3,
        title: 'Czym jest teoria światów równoległych?',
        author: 'Pani Grażynka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at expedita? Nobis excepturi molestias non! Repellendus velit non quia officia voluptate id ea, temporibus nostrum aspernatur inventore, facilis, similique amet!',
    },
];

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ));

    return (
        <>
            <div className="home">
                {artList}
            </div>
        </>
    );
};

export default HomePage;
import React from "react";
// Import components
import Tweet from "./Tweet";

const Tweets= (props) => {
    const tweets = [{ name: 'deved', tweet: 'react ughh, I need alcohol' },
    { name: 'traversy media', tweet: 'whats up guys, Im out taking a break' },
    { name: 'webdevsimplified', tweet: 'hey guys Im simplified the web? guysss hello, where is everybody' }
    ];
    return (
        <section>
            {tweets.map((tweet) => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    );
};

export default Tweets;
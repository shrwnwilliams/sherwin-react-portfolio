import React from 'react';

function Quote() {
    const sickQuotes = [
        "The difficult I'll do right now. The impossible will take a little while.",
        "The person who knows best how to win is the person who's failed the most. You could say that failure is the same as success.",
        "Either get bitter or get better. You can either be a quitter or get fed up from walking two steps behind and develop your grind or you're just wasting time.",
        "We shouldn't have to wait until we've fixed everything to feel whole. We should all take more time to admire who we are right now, with all the pieces we've gathered so far.",
        "If you ever feel like something is too scary or difficult to overcome, know that nothing is impossible if you let yourself rely on others for help, surround yourself with friends and family who love you, and if it ever feels like too much, try to let go of perfection and enjoy yourself along the way.",
      ];
      const quoteSayer = [
        "-Billie Holiday",
        "-Toriko",
        "-Chali 2na",
        "-Princess Calpernia",
        "-Princess Gwendolyn",
      ];

      const randQuote = Math.floor(Math.random() * sickQuotes.length);

    return(
        <div className="text-center container">
        <p id="quote">{sickQuotes[randQuote]}</p>
        <p id="speaker">{quoteSayer[randQuote]}</p>
        </div>
    )
}

export default Quote;
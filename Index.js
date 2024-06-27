function dt() {
    let d = new Date();
    let days = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "बृहस्पतिवार", "शुक्रवार", "शनिवार"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let months = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवंबर", "दिसंबर"];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let Hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    document.getElementById("Clock").innerText=`${day} \n ${month} ${date}, ${year} \n ${Hour}:${min}:${sec}`;
}

setInterval(dt,1000)

const quotes = [
    "“Time is money” – Benjamin Franklin",
    "“Time waits for no one” – Unknown author",
    "“Time is the wisest counselor of all” – Pericles",
    "“Punctuality is the thief of time” – Oscar Wilde, The Picture of Dorian Gray",
    "“The key is in not spending time, but in investing it” – Stephen R. Covey",
    "“It is the time you have wasted for your rose that makes your rose so important” – Antoine de Saint-Exupéry, The Little Prince",
    "“Time is the most valuable thing a man can spend” – Theophrastus",
    "“Better three hours too soon than a minute too late” – William Shakespeare",
    "“Never leave till tomorrow that which you can do today” – Benjamin Franklin",
    "“The two most powerful warriors are patience and time” – Leo Tolstoy",
    "“Your time is limited, so don't waste it living someone else's life.” – Steve Jobs",
    "“Life, if well lived, is long enough” – Seneca",
    "“For the Present is the point at which time touches eternity” – C.S. Lewis",
    "“A man who dares to waste one hour of life has not discovered the value of life” – Charles Darwin",
    "“Tough times never last, but tough people do” – Robert H. Schuller",
    "“Time is more valuable than money. You can get more money, but you cannot get more time” – Jim Rohn",
    "“I never think of the future. It comes soon enough” – Albert Einstein",
    "“Time and the hour run through the roughest day” – William Shakespeare",
    "“The trouble is, you think you have time” – Jack Kornfield",
    "“The common man is not concerned about the passage of time, the man of talent is driven by it” – Arthur Schopenhauer",
    "“They always say time changes things, but you actually have to change them yourself” – Andy Warhol",
    "“One can find time for everything if one is never in a hurry” – Mikhail Bulgakov",
    "“Prioritizing is an important aspect of productivity. Listed tasks should be things that matter: things that are in alignment with your objectives and do not distract you from what you really should be doing” – Romuald Andrade",
    "“Time is a created thing. To say ‘I don't have time,' is like saying, ‘I don't want to” – Lao Tzu",
    "“When was the last time you spent a quiet moment just doing nothing – just sitting and looking at the sea, or watching the wind blowing the tree limbs, or waves rippling on a pond, a flickering candle or children playing in the park?” – Ralph Marston",
    "“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.” – Mother Teresa",
    "“Time management is an oxymoron. Time is beyond our control, and the clock keeps ticking regardless of how we lead our lives. Priority management is the answer to maximizing the time we have.” – John C. Maxwell",
    "“The time you enjoy wasting is not wasted time” – Bertrand Russell",
    "“It's being here now that's important. There's no past and there's no future. Time is a very misleading thing. All there is ever, is the now. We can gain experience from the past, but we can't relive it; and we can hope for the future, but we don't know if there is one.” – George Harrison",
    "“Do not wait: the time will never be ‘just right'. Start where you stand, and work whatever tools you may have at your command and better tools will be found as you go along.” – Napoleon Hill",
    "“Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever” – Samuel Smiles",
    "“Time is the most valuable thing on earth: time to think, time to act, time to extend our fraternal relations, time to become better men, time to become better women, time to become better and more independent citizens” – Samuel Gompers",
    "“At the end of your life, you will never regret not having passed one more test, not winning one more verdict or not closing one more deal. You will regret time not spent with a husband, a friend, a child, or a parent.” – Barbara Bush",
    "“Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.” – Thomas Jefferson",
    "“It's not that we have little time, but more that we waste a good deal of it” – Seneca",
    "“Those who make the worst use of their time are the first to complain of its brevity” – Jean De La Bruyere",
    "“Time is one of your most valuable commodities and how you spend it determines what your life will be. You can either waste it, invest it or give it away.” – David Khalil",
    "“I don't dwell in the past; I don't wallow in old events and emotions. I don't waste time on regret. No use going over and over the details of what already happened.” – Yanni",
    "“If people would reflect that one can only do one thing at a time and therefore there is never more than one thing to do at a time, there would be less fatigue in the world” – Emmet Fox",
    "“How many things in your life do you do automatically, routinely, that are a waste of time but you don't take the time to remedy them?” – Robert S. Scott"
  ];

function random(max){
    return Math.floor(Math.random()*max);
}

a=random(40);
b=quotes[a]

document.getElementById("quote").innerText=b


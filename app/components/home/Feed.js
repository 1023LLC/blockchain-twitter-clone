import { BsStars } from "react-icons/bs"
import TweetBox from "./TweetBox"
import Post from "../Post"


const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}


const tweets = [
    {
        displayName: "1023 LLC",
        username: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        avatar: "https://picsum.photos/id/237/200/300",
        text: "I've just received my first bug bounty from @code4rena!",
        isProfileImageNft: false,
        timestamp: "2025-05-05T12:00:00Z",
    },
    {
        displayName: "1023 LLC",
        username: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        avatar: "https://picsum.photos/id/237/200/300",
        text: "Who wants to build a dapp with me?",
        isProfileImageNft: true,
        timestamp: "2025-04-30T12:00:00Z",
    },
    {
        displayName: "1023 LLC",
        username: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        avatar: "https://picsum.photos/id/237/200/300",
        text: "How can I get started with web3?",
        isProfileImageNft: false,
        timestamp: "2025-03-11T12:00:00Z",
    },
    {
        displayName: "1023 LLC",
        username: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        avatar: "https://picsum.photos/id/237/200/300",
        text: "Here are some learning resources for Solana. Check thread.",
        isProfileImageNft: true,
        timestamp: "2025-02-27T12:00:00Z",
    },
    {
        displayName: "1023 LLC",
        username: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        avatar: "https://picsum.photos/id/237/200/300",
        text: "Just began my 30-day solidity challenge!",
        isProfileImageNft: false,
        timestamp: "2025-01-17T12:00:00Z",
    },
]


function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    Home
                </div>
                <BsStars />
            </div>
            <TweetBox />
            { tweets.map((tweet, index) =>  (
                console.log(tweet),
                <Post  
                    key={index}
                    displayName={tweet.displayName}
                    username={`${tweet.username.slice(0, 5)}...${tweet.username.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}

        </div>
    )
}

export default Feed
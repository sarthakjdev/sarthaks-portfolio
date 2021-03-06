
import { Tweet } from 'react-twitter-widgets';
import Skeleton from 'react-loading-skeleton'
export default function TweetEmbedComp ({tweet}) {
  return (          
         <article key={tweet.id} className='flex h-auto place-content-center'>
               <div className='flex p-4 h-fit place-content-center bg-gradient-to-bl from-gradientCol1 to-gradientCol3 rounded-2xl'>
                    {tweet && <Tweet tweetId={tweet.id} options={{theme: 'dark', width: 'auto', height: '100', conversation: 'none'  }} /> || <Skeleton />}
               </div>
          </article>
)
}
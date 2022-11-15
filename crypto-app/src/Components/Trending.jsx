import React ,{useState,useEffect} from 'react'
import axios from 'axios'
const Trending = () => {

    const [trending,setTrending]=useState([])
    const url="https://api.coingecko.com/api/v3/search/trending"
    useEffect(()=>{
        axios.get(url).then((res)=>
           setTrending(res.data.coins))  
    },[url])

  return (
    <div className='rounded-div my-12 py-8 text-primary'>
        <h1 className='text-2xl font-bold py-4'>Trending</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {trending.map((coin)=>(
                <div key={coin.item.id}
                className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex'>
                            <img src={coin?.item.small} alt={coin?.item.name}/>
                            <div className='ml-4'>
                            <p className='font-bold'>{coin?.item.name}</p>
                            <p >{coin?.item.symbol}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-4 mr-2'
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt='/'/>
                            <p>{coin?.item.price_btc.toFixed(8)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trending
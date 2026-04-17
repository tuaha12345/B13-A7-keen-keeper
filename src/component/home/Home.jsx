import React,{useState,useEffect} from 'react';
import Banner from './Banner';
import CardDetails from '../cardDetails/CardDetails';
import { useLoaderData } from 'react-router';


const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[]);
    // const [friends, setFriends] = useState([]);
    // useEffect(() => {
    //     fetch('./data.json')
    //     .then(res => res.json())
    //     .then(data => setFriends(data))
    // },[]);
    // console.log(friends);
    // const friendsPromise = useLoaderData();
    // const friends = use(friendsPromise);
    // const friends=useLoaderData();
    
    

    return (
        <div className='mx-auto container w-11/12 my-10'>
            <Banner friends={friends}></Banner>
            <CardDetails></CardDetails>
        </div>
    );
};

export default Home;
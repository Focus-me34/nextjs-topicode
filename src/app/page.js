"use client"; // ! DO I REALLY NEED THAT? NOT SURE AT ALL

import Image from 'next/image'
import styles from './page.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from '@/redux/features/userSlice';
import { useEffect } from 'react';

const Home = () => {
  return (
   <div>
    <h1>TOPICODE - HOMEPAGE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci assumenda, alias officia nisi cum, in quam sed sapiente architecto quis illo earum nobis. Nesciunt ducimus provident odio quae esse.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci assumenda, alias officia nisi cum, in quam sed sapiente architecto quis illo earum nobis. Nesciunt ducimus provident odio quae esse.</p>
   </div>
  )
}

export default Home;

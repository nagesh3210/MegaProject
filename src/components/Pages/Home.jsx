import React from 'react'

import Home from '../index.js'
import { useState , useEffect } from 'react';
import appWriteService from '../../appWrite/config.js'
import { Container,PostCard } from '../index.js';



function Home()
{

    const [posts ,setPosts] = useEffect([])


    useEffect (()=>{

        appWriteService.getPosts().then((post)=>{
        if(posts){
            setPosts(post.documents)
        }
    })
    },
    [])

 if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


 return (
       <div>
        <Container>
            <div>
            {posts.map((post)=> (<div key={posts.$id}> <PostCard {...posts}/> </div>)  )}
            </div>
        </Container>
       </div>
    )}


export default Home
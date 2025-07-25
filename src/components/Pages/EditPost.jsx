import React, { useEffect, useState } from 'react'

import { Container , PostForm } from '../index.js'
import appWriteService from '../../appWrite/config.js'
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form';


function EditPost()
{
    const [post ,setPost] = useState();
    const {slug} = useParams();

    const navigate = useNavigate();


    useEffect(()=>
    {
        if(slug){
            appWriteService.getPost(slug).then((post)=>
            {
                if(post){
                    setPost(post)
                }
            })
        }else
        {
            navigate('/')
        }
    },[slug,navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ):null


}


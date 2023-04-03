import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostService } from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/loader/Loader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchCommsId, isCommsLoading, errorComms] = useFetching(async(id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchCommsId(params.id)
    }, [])
  return (
    <div className='postIdPageWrapper'>
        <h1>Вы перешли на страницу поста c ID = {params.id}</h1>
        {isLoading 
            ? <Loader /> 
            : <div>{post.id}. {post.title}</div>
        }
        <h1>Комментарии</h1>
        {isCommsLoading
            ? <Loader />
            : comments.map(comment => 
                <div style={{margin: '20px 0'}} key={comment.id}>
                    <h3>{comment.email}</h3>
                    <div>{comment.body}</div>
                </div>
            )
        }
    </div>
  )
}

export default PostIdPage
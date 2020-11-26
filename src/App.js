import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Card from "./components/Card";

const App = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((r) => {
        //     setPosts(r.data)
        // })
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response.data)
    }

    const take10 = (d, index) => index < 10

    // render 후에 아래 effect가 실행 됨
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="App">
            <div className="left">
                <div className="header">
                    전체 / 연예인 / 방송
                </div>
                <div className="contents">
                    {posts.filter(take10).map((post, index) => {
                        return <Card key={`${post.title}_${index}`} title={post.title} body={post.body} />
                    })}
                </div>
            </div>
            <div className="right">
                프로필
            </div>

        </div>
    )
}

export default App

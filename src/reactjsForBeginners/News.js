import React, {useEffect, useState} from 'react';

const NewsApp = () => {
    //state
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('react');
    const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=react");
    const [loading, setLoading] = useState(false);
    //fetch news
    const fetchNews = () => {
        setLoading(true);
        fetch(url)
        .then(result => result.json())
        .then(data => {setNews(data.hits); 
                       setLoading(false)})
        .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchNews();
    }, [url]);
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    }

    return (
        <div className="App">
            {loading ? <h2>Loading...</h2> : ""}
            <h2>News</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button>Submit</button>
            </form>
            {news.map((n, i) => <p key={i}>{n.title}</p>)}
        </div>
    )
}

export default NewsApp;
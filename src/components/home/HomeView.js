const HomeView = ({publishedPost}) => {
    const {loading, error, articles} = publishedPost
    return (<div>
        <h1>Home View</h1>
        { loading && <span>Loading...</span> }
        { error && <span style={{color: 'red'}}>{error}</span> }
        <ol>{ articles.map((article, i) => 
            <li key={i}>
                {article.title}, {article.content}
            </li>
        )}</ol>
    </div>)
}
export default HomeView
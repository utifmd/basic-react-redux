const HomeList = ({articles}) => {
    return (
        <ul className="divide-y divide-gray-200">{ articles.map((article, i) => 
            <li key={i} className="py-4 flex">
                <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{article.title}</p>
                <p className="text-sm text-gray-500">{article.content}</p>
                </div>
            </li>
        )}</ul>
    )
}
export default HomeList
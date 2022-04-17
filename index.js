function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
    <h1>Books:</h1>
        <div className="container">
            {loaded && data.books.map((book,i) => 
                <mit-book key={i}
                    title={book.title} 
                    subtitle={book.subtitle}
                    author={book.author}
                    description={book.description}
                    website={book.website}
                />
            )}
        </div>      
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

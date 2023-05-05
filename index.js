const App = () => {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState("");
    const [color, setColor] = React.useState("#16a085")

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);

            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuotes(data[randomIndex]);
        }
        fetchData();
    }, []);

    const getNewQuote = () => {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ]

        let randomColorIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomColorIndex])

        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuotes(quotes[randomIndex]);
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5 ">
            <div className="text-center">
                <h3 className="text-white">Deba's Random Quote App</h3>
               <div className="card">
                <div className="card-body">
                    {randomQuotes ? (
                            <>
                                <h5 className="card-text" style={{color: color}}>&quot;{randomQuotes.text}&quot;</h5>
                                <p className="card-author" style={{color: color}}> - {randomQuotes.author || "No author"}</p>
                            </>
                        )
                        : (
                            <h2>Loading</h2>
                        )
                        }
                    <div className="row card-buttons">
                        <div className="col">
                            <button onClick={getNewQuote} className="btn text-white new-quote m-2 p-2" style={{backgroundColor: color}}>New Quote</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
        <p className="text-center text-white">by Josiah</p>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
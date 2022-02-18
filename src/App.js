import Header from './components/Header/Header';
const Data = [
    {
        name: 'henok',
        id: 1
    },
    {
        name: 'alex',
        id: 2
    },
    {
        name: 'nati',
        id: 3
    },
    {
        name: 'selam',
        id: 4
    }
];

function App() {
    return (
        <div>
            {Data.map((name) => {
                return (
                    <div key={name.id}>
                        <p onClick={() => console.log(name.id)}>{name.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;

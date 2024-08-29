import './App.css';

function App() {
  return (
    <div className="w-full h-screen">
      <header>
        <div className="md:flex flex-wrap rounded-t-xl gap-3 space-y-3 md:justify-between md:h-20 h-28 px-10 bg-black text-slate-200 md:items-center">
          <h1 className="text-xl"><b>Abstract</b> | Help Center</h1>
          <button className="border border-gray-600 p-1 rounded-md shadow shadow-blue-200">Submit a request | create a new card</button>
        </div>
      </header>
    </div>
  );
}

export default App;

// src/App.js
import { useEffect } from 'react';
import MyTable from './components/MyTable';
import handleError from './hocs/handleError';
import isLoading from './hocs/isLoading';
import fetchData from './hooks/fetchData';

const MyTableWithErrorHandling = handleError(isLoading(MyTable))

function App() {
  const { data, isLoading, error } = fetchData('https://jsonplaceholder.typicode.com/posts');
  const { data: data2, isLoading: isLoading2, error: error2 } = fetchData('https://jsonplaceholder.typicode.com/postsx');

  useEffect(() => {
    console.log(error2)
  }, [error2])
  
  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>MyTable, fetching error</h1>
        <MyTableWithErrorHandling data={data2} isLoading={isLoading2} error={error2}/>
      </div>
      <div style={{ padding: '20px' }}>
        <h1>MyTable, is loading</h1>
        <MyTableWithErrorHandling data={data} isLoading={isLoading} error={error}/>
      </div>      
    </>    
  );
}

export default App;

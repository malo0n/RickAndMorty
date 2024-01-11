import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Body from './Body.jsx'
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Body/>
    </QueryClientProvider>
  </React.StrictMode>,
)

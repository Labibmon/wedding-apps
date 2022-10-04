import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ 
  Component,
  pageProps
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0
      }
    }
  })

  return ( 
    <QueryClientProvider client={queryClient}>
      <Component { ...pageProps} />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default MyApp
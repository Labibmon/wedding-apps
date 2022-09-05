import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import '../styles/globals.css'

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
    </QueryClientProvider>
  )
}

export default MyApp
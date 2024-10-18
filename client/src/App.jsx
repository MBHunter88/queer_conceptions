import AppRouter from './router/AppRouter';
import { UserProvider } from './context/UserContext';


function App() {
  
//use AppRouter to render routed pages
  return (
    <div className="App">
      <UserProvider>
      <AppRouter />
      </UserProvider>
    </div>
  )
}

export default App

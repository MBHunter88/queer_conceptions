import AppRouter from './router/AppRouter';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';


function App() {

  //use AppRouter to render routed pages
  return (
    <div className="App">
      <UserProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </UserProvider>
    </div>
  )
}

export default App

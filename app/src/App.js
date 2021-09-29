import {client} from "./Config/client-graphql";
import {ApolloProvider} from "@apollo/client";
import Alunos from './Views/Alunos';
import Header from "./Components/Shared/UI/Header";
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Header></Header>
          <div className="Conteudos">
                <Alunos/>
          </div>        
      </div>
    </ApolloProvider>
  );
}

export default App;

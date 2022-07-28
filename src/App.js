import{Button } from "./Components/Button.style";
import {AppContainer} from "./Components/Container.style";
import { GlobalStyles } from "./Components/GlobalStyles.style";
import {} from "./GlobalStyles.style";

function App(){
  return(
        <AppContainer>
          <GlobalStyles/>
    <StyledButton buttonLabel="Click" backgroundColor></StyledButton>
    </AppContainer>
  );
}
export default App;
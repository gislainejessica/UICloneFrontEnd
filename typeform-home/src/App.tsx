import React from 'react'
import { Main, Section, Sticky } from './styles';
import FirstAndSecond from './components/FirstAndSecond'
import GlobalStyles from './styles/global'
import Header from './components/Header';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main style={{ height: '1610vh' }}>

        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
          {/* <Sticky className="first" />
          <Sticky className="first" /> */}
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '13.1%' }}>
          <Sticky className="forth" />
        </Section>

      </Main>
    </>
  );
}

export default App;

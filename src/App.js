import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Home, Notes } from './pages'
import { TopMenu } from './components'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export default () => (
  <>
    <GlobalStyle />
    <Router history={history}>
      <>
        <TopMenu />
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/notes/:status' component={Notes} />
          </Switch>
        </Content>
      </>
    </Router>
  </>
)

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    font-weight: 500;
  }
  #root {
    padding: 20px;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

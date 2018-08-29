import React from 'react'
import {Switch,Route,Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Name from './components/Name'
import Chat from './components/Chat'
import {connect} from 'react-redux'
import socketIOClient from 'socket.io-client'
export const client = socketIOClient("http://localhost:5000")
export const history = createHistory()

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
  componentDidMount(){
    client.on('broad_cast_message',response=>{
        var new_array = this.state.data
        new_array.push(response)
        this.setState({
            data:new_array
        })

    })
  }
  render(){
    return (
        <Router history = {history}>
            <Switch>
                <Route exact path ='/' component={Name}/>
                <Route exact path = "/chat"render={(props)=><Chat data={this.state.data} {...props}/>}/>
            </Switch>
        </Router>
    )
  }
}

export default connect()(App)
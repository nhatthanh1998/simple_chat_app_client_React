import React from 'react'
import {connect} from 'react-redux'
import {set_name} from '../actions/index'
import {history} from '../App'
class Name extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:''
        }
    }
    render(){
        return(
            <div style={{width:"100%",height:"100vh",background:"#ffebee",position:"relative"}}>
            <div style={{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%,-50%)",width:"50rem",height:"15rem"}}>
            <div className="row" >
          <span style={{textAlign:"center",fontSize:"5rem",color:"#b71c1c"}} className="w-100">CHAT ROOM <i class="far fa-comments"></i></span>
          </div>
          <label for="name">Enter your name</label>
            <input className="form-control" style={{fontFamily:"'Comfortaa', cursive",fontSize:"2rem",height:"36px"}} id="name" autoComplete="off"
            onChange={event =>{
                this.setState({
                    name:event.target.value
                })
            }}
            />
            <div className="btn mt-3 text w-100" style={{fontSize:"2rem",color:"white",background:"#b71c1c"}} 
            onClick={async ()=>{
                if(this.state.name.length > 0){
                    await this.props.dispatch(set_name(this.state.name))
                    history.push('/chat')
                }
            }}
            >Join now!</div>
            </div>
            </div>
        )
    }
}

export default connect()(Name)
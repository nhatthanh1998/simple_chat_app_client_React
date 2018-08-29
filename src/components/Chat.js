import React, { Component } from 'react';
import { client,history } from "../App";
import {connect} from 'react-redux'
class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'',
      content:[]
    }
  }
  componentDidMount(){
    if(this.props.name === null){
      history.push("/")
    }else{
      var input = document.getElementById("text");
      input.addEventListener("enter", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
      document.getElementById("btn").click()
    }
})
    }
    
  }
  render_chat(){
    if(this.props.data.length>0){
      return this.props.data.map(message=>{
        return(
          <div className="row pt-2 pl-2">
          <span style={{color:"#b71c1c",fontSize:"2rem"}}>{message.name}:</span><span style={{fontSize:"2rem"}}>{message.message}</span>
          </div>
        )
      })
    }
  }




  send(){
    client.emit('chat',{name:this.props.name,message:this.state.message})
  }
  render() {
    console.log(this.props.data)
    return (
      <div style ={{width:"100%",height:"100vh",fontFamily:"'Comfortaa', cursive",background:"#ffebee"}}>
        <div className="container">
          <div className="row" >
          <span style={{textAlign:"center",fontSize:"5rem",color:"#b71c1c"}} className="w-100">CHAT ROOM <i class="far fa-comments"></i></span>
          </div>
          <div className="row mt-5">
              <div className="col-12" style={{height:"75vh",fontSize:"2rem",background:"white",boxShadow:"0 10px 20px #777",overflow:"scroll"}} disabled>
              {this.render_chat()}
              </div>
          </div>
          <div className="row mt-5">
          <div className="col-10 p-0">
          <input className="form-control" style={{fontSize:"2rem",height:"36px",boxShadow:"0 10px 20px #777"}} id = "text" onChange = {event=>{
            this.setState({
              message:event.target.value
            })
          }}/>
          </div>
          <div className="col-2 p-0">
          <div className="btn btn-success" style={{height:"36px",fontSize:"2rem",width:"100%",boxShadow:"0 10px 20px #777"}}
          id="btn"
          onClick={()=>{
            if(this.state.message.length > 0){
              this.send()
              document.getElementById("text").value = ""
              this.setState({
                message:""
              })
            }
          }}
          
          >Send <i class="far fa-paper-plane"></i></div>
          </div>
          </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    name:state.name
  }
}

export default connect(mapStateToProps)(Chat);

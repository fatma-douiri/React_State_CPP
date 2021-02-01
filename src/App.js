import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import pic from './pic.jpg'

export default class App extends Component {
   
  
    state={
          picProfile: <img src={pic}  class="rounded" alt="picProfile" width='150px'  height='150px' />,
          fullName: 'Fatma DOUIRI',
          profession :'profession',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus molestias dolores cupiditate consectetur esse earum magnam.',
          show : true,
          timer: 0,
          intervall : null
        }

        timer = () => {
            this.setState({
            intervall: setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
           1000 ),
           });
           };
       
       componentDidMount () {
            this.timer();
            }
    
  
   render(){

    if (!this.state.show ) { 
        return(
              
              <div>
                  <div>
                    <div class="container mt-5 d-flex justify-content-center">
                        <div class="card p-3">
                             <div class="d-flex align-items-center">
                                  <div class="image"> {this.state.picProfile} 
                                  </div>
                                  <div class="ml-3 w-100">
                                      <h4 class="mb-0 mt-0">{this.state.fullName} </h4> 
                                      <span>Profession</span>
                                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                          <p>{this.state.bio} </p>
                                      </div>
                                      <div class="button mt-2 d-flex flex-row align-items-center"> 
                                           <button class="btn btn-sm btn-outline-primary w-100">{this.state.timer}</button> 
                                           <button class="btn btn-sm btn-primary w-100 ml-2" onClick={()=>{this.setState({ show: !this.state.show, timer:0, })  }}> {this.state.show ? "Show Profile" : "Hide Profile"}</button> </div>
                                      </div>
                                  </div>
                        </div>
                    </div>
                  </div>  
              </div>
              
         )}
// style={{display:' block', marginLeft:'auto',marginRight: 'auto'}}
         else { 
            return (  <div class="text-center mt-5">           
                     <button type="button" class="btn btn-primary btn-lg "
                     onClick={()=>this.setState({ show: !this.state.show ,timer:0})}> 
                     {this.state.show ? "Show Profile" : "Hide Profile"}</button> 
                     </div>  
                    )}
}
}




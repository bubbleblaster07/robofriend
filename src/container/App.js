import React, { Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import {robots} from "./robots";
import Scroll from "../components/Scroll";
import "./App.css";




class App extends Component{
    constructor(){
        super()
        this.state={
          robots:[],
          Searchfield:''

        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=> response.json())
           .then(users=>this.setState({robots:users}));
    }
    onSearchChange=(event)=>{
        console.log(event.target.value);
        this.setState({Searchfield: event.target.value})
       
    }
    render(){
        const filteredRobots= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if(this.state.robots === 0){
            <h1>loading..</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );     
        }    
        
    }
    


}






// const App =()=>{
//     const [searchfield, setSearchfield] = useState('hello');
//     const [robots,setRobots]= useState(robots);
//     console.log(searchfield);
//     const searchChange=(event)=>{
//         console.log(event?.target?.value);        
//         setSearchfield(event?.target?.value);
//     }
//     useEffect(() =>{
//         if(robots && searchfield ){    
//             setRobots(robots.filter(
//             robots=>{
//             return robots.name.toLowerCase().includes(searchfield.toLowerCase())
//           }))}
   

//     },[searchfield])
// return(
//     <div className="tc">
//        <h1>RoboFriend</h1>
//         <SearchBox 
//             onChange={searchChange}
//         />
//         <CardList robots={robots}/>
//     </div>

// );
// }


 export default App;
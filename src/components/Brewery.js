import React, {Component} from "react"

class Brewery extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            description: "",
            image: ""
        }
    }

    componentDidMount()
    {
       let rand;

        this.callBackendAPI()
        .then(res => {
            rand = Math.floor(Math.random() * res.data.length);
            try{
                const {description, images, name} = res.data[rand];
        
                this.setState(
                    {
                        name: name,
                        description: description,
                        image: images.icon
                    })
            }
            catch(error)
            {
                const {description, name} = res.data[rand];
                this.setState(
                    {
                        name: name,
                        description: description,
                        image: ""
                    })
            }
        });

    }

    callBackendAPI = async () => {
        const response = await fetch('/brewery');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

    render()
    {
        return(
            <div className="card">
                <div className="image">
                    <img src={this.state.image} alt="brewery logo"></img>
                    <h1>{this.state.name}</h1>
                </div>
                <div className="description">
                    <p>{this.state.description}</p>
                </div>
            </div>
            )
    }
}

export default Brewery
import React, {Component} from "react"

class Brewery extends Component{
    constructor(){
        super()
        this.state = {
            description: "",
            image: ""
        }
    }

    componentDidMount()
    {
        let description, image, rand;

        this.callBackendAPI()
        .then(res => {
            rand = Math.floor(Math.random() * res.data.length);
           
            description = res.data[rand].description
            console.log(rand)
            image = res.data[rand].images.medium
            console.log(rand)
            this.setState({description: description,
            image: image})
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
                </div>
                <div className="description">
                    <p>{this.state.description}</p>
                </div>
            </div>
            )
    }
}

export default Brewery
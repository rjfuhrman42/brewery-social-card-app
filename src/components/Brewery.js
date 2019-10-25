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
        let description, image;
        this.callBackendAPI()
        .then(res => {
            description = res.data[5].description
            image = res.data[5].images.medium
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
            <div>
                <img src={this.state.image}></img>
                <p>{this.state.description}</p>
            </div>
            )
    }
}

export default Brewery
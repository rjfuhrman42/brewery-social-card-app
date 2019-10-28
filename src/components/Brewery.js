import React, {Component} from "react"

class Brewery extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            description: "",
            image: "",
            loading: false
        }
    }

    componentDidMount()
    {
        let rand;
        this.setState({loading: true});

        this.callBackendAPI()
        .then(res => {
            rand = Math.floor(Math.random() * res.data.length);
            if(rand === 1){rand = Math.floor(Math.random() * res.data.length)} // just need to remove Sam Adams
            try{
                const {description, images, name} = res.data[rand];
        
                this.setState(
                    {
                        name: name,
                        description: description,
                        image: images.large,
                        loading: false
                    })
            }
            catch(error)
            {
                const {description, name} = res.data[rand];
                this.setState(
                    {
                        name: name,
                        description: description,
                        image: "",
                        loading: false
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
        if(this.state.loading)
        {
            return (
            <div className="card">
                <h1>Loading...</h1>
            </div>
            )

        }
        else return(
            <div className="card">
                <div className="image">
                    <img src={this.state.image} alt="brewery logo"></img>
                </div>
                <div className="description">
                    <h1>{this.state.name}</h1>
                    <p>{this.state.description}</p>
                </div>
            </div>
            )
    }
}

export default Brewery
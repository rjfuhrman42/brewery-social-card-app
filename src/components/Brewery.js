import React, {Component} from "react"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

class Brewery extends Component{
    constructor(){
        super()
        this.state = {
            data: "",
            image: "",
            loading: false,
            active: false
        }

        this.toActive = this.toActive.bind(this)
    }

    componentDidMount()
    {
        this.setState({loading: true});

        this.callBackendAPI()
        .then(res => {

            const brewData = res.data[this.props.num];

            try{
                this.setState(
                    {
                        data: brewData,
                        image: brewData.images.large,
                        loading: false
                    })
            }
            catch(error)
            {
                this.setState(
                    {
                        data: brewData,
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

    toActive()
    {
        this.setState(prevState => ({ 
            active: !prevState.active
        })
        )
    }

    render()
    {
        const {data, image, loading, active} = this.state
        if(loading)
        {
            return (
            <div className="card">
                <h1 id="loading">Loading...</h1>
            </div>
            )

        }
        else return(

            <div className={active ? 'card-active' : 'card'} onClick={this.toActive}>
                <div className="card-inner">
                    <CardBack image={image}/>
                    <CardFront data={data}/>
                </div>
            </div>
            )
    }
}

export default Brewery
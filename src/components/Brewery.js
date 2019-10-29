import React, {Component} from "react"

class Brewery extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            data: "",
            image: "",
            loading: false,
            active: false
        }

        this.toActive = this.toActive.bind(this)
    }

    componentDidMount()
    {
        let rand;
        this.setState({loading: true});

        this.callBackendAPI()
        .then(res => {
            rand = Math.floor(Math.random() * res.data.length);
            if(rand === 1){rand = Math.floor(Math.random() * res.data.length)} // just need to remove Sam Adams ***THIS DOESN'T WORK :)
            const brewData = res.data[this.props.num];

            try{
                this.setState(
                    {
                        name: brewData.name,
                        data: brewData,
                        image: brewData.images.large,
                        loading: false
                    })
            }
            catch(error)
            {
                this.setState(
                    {
                        name: brewData.name,
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
        const {name, data, image, loading, active} = this.state
        const organic = data.isOrganic === "Y" ? "Is organic" : "Is not organic"
        const massOwned = data.isMassOwned === "Y" ? "Is mass owned" : "Is not mass owned"
        const inBusiness = data.isInBusiness === "Y" ? "Is currently in Business" : "Is currently out of business"
        
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
                    <div className="image">
                        <img src={image} alt="brewery logo"></img>
                    </div>
                    <div className="description">
                        <h1>{name}</h1>
                        <p>est. {data.established}</p>
                        <p>{organic}</p>
                        <p>{massOwned}</p>
                        <p>{inBusiness}</p>
                        <a href={data.website}>{name} Website</a>
                    </div>
                </div>
            </div>
            )
    }
}

export default Brewery
import toggle from "./toggle.js";
"use strict;"

class light_toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {toggled: props.defaultState}
        this.toggle_Light = this.toggle_Light.bind(this)
        this.setLight();
    }

    toggleOn(){
        document.getElementById("header").style.cssText="background-color: #FF6A00";
        document.getElementById("footer").style.cssText="background-color: #FF6A00";
        document.getElementById("content-wrapper").style.cssText = "background-color: white; background-image:none"
        document.getElementById("content").style.cssText = "color: black; text-shadow: none; background-image:url(./Project_images/bodyBackgroundLight.png);";
        document.getElementsByTagName("body")[0].style.cssText="background-color: #FF6A00";
    }
    toggleOff(){
        document.getElementById("header").style.cssText="background-color: #000122";
        document.getElementById("footer").style.cssText="background-color: #000122";
        document.getElementById("content-wrapper").style.cssText = "background-color: #020430;"
        document.getElementById("content").style.cssText = "color: white;";
        document.getElementsByTagName("body")[0].style.cssText="background-color: #020430;";
    }   

    setLight(){
        if(this.state.toggled)
        {
            this.toggleOn()
        }
        else{
            this.toggleOff()
        }
    }

    toggle_Light(){
        if(this.state.toggled)
        {
            this.setState({toggled: false});
            this.toggleOff()
        }
        else
        {
            this.setState({toggled: true});
            this.toggleOn()
        }
        console.log(this.state.toggled)
    }
    render(){
            return(React.createElement("div",{className:"lightToggle"},
                React.createElement(toggle,{ 
                    defaultState: this.props.childState,
                    image1:"./Project_images/dark.png",
                    image2:"./Project_images/light.png",
                    toggle2: this.toggle_Light,
                    className: "light-toggle",
                })
            ));
            
    }
}
export default light_toggle;
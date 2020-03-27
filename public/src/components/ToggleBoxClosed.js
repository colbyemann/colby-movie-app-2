import React, { Component } from "react";

class ToggleBoxClosed extends React.Component {
//All 4 tooglebox components are modified from https://www.golangprograms.com/reactjs-show-hide-component-on-click.html

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
        const { opened } = this.state;
        var check = false;

		if (opened){
            title ='Hide Crew';
            check = true;
		}else{
            title ='Crew'; 
            check = false;
		}

		return (
            <div>
                <div className="boxTitle" onClick={this.toggleBox}>
					<button>{title}</button>
				</div>
			{check ? (<div className="box">
				
                
				{opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
               
			</div>) : null}
            </div>
		);
	}
}
export default ToggleBoxClosed;
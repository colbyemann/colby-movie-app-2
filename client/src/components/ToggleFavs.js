import React, { Component } from "react";
import { Button } from 'antd';

class ToggleFavs extends React.Component {
//All 4 tooglebox components are modified from https://www.golangprograms.com/reactjs-show-hide-component-on-click.html
	constructor(props) {
		super(props);
		this.state = {
			opened: true,
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
            title ='Hide Favs';
            check = true;
		}else{
            title ='Show Favs';
            check = false;
		}

		return (
            <div>
                <div className="boxTitle" onClick={this.toggleBox}>
					<Button class="buttonhunter">{title}</Button>
				</div>
			{check ? (<div className="box2">
				
                
				{opened && (					
					<div class="boxContent2">
						{children}
					</div>
				)}
               
			</div>) : null}
            </div>
		);
	}
}

export default ToggleFavs;
import React from "react";
import './MovieFilters.css';
// Using an ES6 transpiler like Babel

import { Button } from 'antd';

import { Drawer, Button } from 'antd';
 
// To include the default styles
import 'react-rangeslider/lib/index.css'

class MovieFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', beforetext: '', aftertext: '', betweentext1: '', betweentext2: '', 
        selectedOption: false, valuebelow: 5.0, valueabove: 5.0, valuebetween1: 5.0, valuebetween2: 5.0,
        selectedOption2: false,  visible: false, visible2: false, visible3: false  };
       }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  showDrawer2 = () => {
    this.setState({
      visible2: true,
    });
  };

  showDrawer3 = () => {
    this.setState({
      visible3: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      visible2: false,
      visible3: false
    });
  };

       handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
       }

       handleClick = (e) => {
        e.preventDefault();
        //filter by title
        this.props.search(this.state.title);

        //filter by Year
        if (this.state.selectedOption === 'option1') {
           this.props.year(this.state.beforetext)
          } 
        else if (this.state.selectedOption === 'option2'){
            this.props.yearAfter(this.state.aftertext)
          }
        else if (this.state.selectedOption === 'option3'){
            this.props.yearBe(this.state.betweentext1,this.state.betweentext2)
        }

        //Filter by Ratings
        if (this.state.selectedOption2 === 'option1') {
            this.props.below(this.state.valuebelow)
           } 
         else if (this.state.selectedOption2 === 'option2'){
             this.props.above(this.state.valueabove)
           }
         else if (this.state.selectedOption2 === 'option3'){
             this.props.ratingBe(this.state.valuebetween1,this.state.valuebetween2)
         }
        

       }

       //functions save change events for sliders and textboxes
       handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }

      handleOptionChangeRating = (changeEvent) => {
        this.setState({
          selectedOption2: changeEvent.target.value
        });
      }

      sliderChange1 = (value) => {
        this.setState({
          valuebelow: value
        })
      }
      sliderChange2 = (value) => {
        this.setState({
          valueabove: value
        })
      }
      sliderChange3 = (value) => {
        this.setState({
          valuebetween1: value
        })
      }
      sliderChange4 = (value) => {
        this.setState({
          valuebetween2: value
        })
      }


 render() {
     //sliders retrived from https://www.npmjs.com/package/react-rangeslider
 return (
    
    <aside >
       
    <div className="detailsPhotoBox">
    <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Title Filter
          </Button>
          <Button type="primary" onClick={this.showDrawer2}>
            Year Filter
          </Button>
          <Button type="primary" onClick={this.showDrawer3}>
            Rating Filter
          </Button>
        </div>
        <Drawer
          title="Title"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Year"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible2}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
        <Drawer
          title="Ratings"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible3}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    
    </div>
    
    </aside>
   
 );
 }
}
export default MovieFilters


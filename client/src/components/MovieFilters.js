import React from "react";
import './MovieFilters.css';

import { Input } from 'antd';

import { Drawer, Button } from 'antd';

class MovieFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', r1: '', r2: '', y1: '', y2: '', 
        visible: false, visible2: false, visible3: false };
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
          visible3: false,
        });
      };
     

       handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
        
       }

       handleClick = (e) => {
        e.preventDefault();
        //filter by title
        this.props.search(this.state.title);
  

       }

       handleClickYear = (e) => {
        e.preventDefault();
        //filter by year
        this.props.searchYear(this.state.y1, this.state.y2);
  

       }

       handleClickRating = (e) => {
        e.preventDefault();
        //filter by rating
        this.props.searchRating(this.state.r1, this.state.r2);
  

       }



 render() {
  
 return (
    
    <aside >

<div className="site-drawer-render-in-current-wrapper">
Search
<div style={{ marginTop: 5 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Title
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
          <form>
            <Input type='text' name='title'onChange={this.handleChange}/>
            <Button onClick={(e) => {this.handleClick(e)}}>Filter</Button>
          </form>
        </Drawer>

        <div style={{ marginTop: 5 }}>
          <Button type="primary" onClick={this.showDrawer2}>
            Year
          </Button>
        </div>
        <Drawer
          title="Year"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible2}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <form>
          Between
          <Input type='text' name='y1' onChange={this.handleChange}/>
          and
          <Input type='text' name='y2' onChange={this.handleChange}/>
          <Button onClick={(e) => {this.handleClickYear(e)}}>Filter</Button>
          </form>
        </Drawer>

        <div style={{ marginTop: 5 }}>
          <Button type="primary" onClick={this.showDrawer3}>
            Rating
          </Button>
        </div>
        <Drawer
          title="Year"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible3}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          Between
          <Input type='text' name='r1' onChange={this.handleChange}/>
          and
          <Input type='text' name='r2' onChange={this.handleChange}/>
          <Button onClick={(e) => {this.handleClickRating(e)}}>Filter</Button>
        </Drawer>
      </div>
  
       
    {/* <div className="detailsPhotoBox">
    <form className="photoForm">
    <legend>Movie Filters</legend>
    <label>Title</label>
    <Input type='text' name='title'onChange={this.handleChange}/>
    <label>Year</label>
    <label for="before"><Radio type="radio" id="before" name="year" value="option1" checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange}/>Before <Input type='text' name='beforetext' onChange={this.handleChange}/></label>
    <label for="after"><Radio type="radio" id="after" name="year" value="option2" checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange}/>After <Input type='text' name='aftertext' onChange={this.handleChange}/></label>
    <label for="between1"><Radio type="radio" id="betwen1" name="year" value="option3" checked={this.state.selectedOption === 'option3'} 
                      onChange={this.handleOptionChange}/>Between <Input type='text' name='betweentext1' onChange={this.handleChange}/><Input type='text' name='betweentext2' onChange={this.handleChange}/></label>

<label>Rating</label>
    <label for="below"><Radio type="radio" id="below" name="rating" value="option1" checked={this.state.selectedOption2 === 'option1'} 
                      onChange={this.handleOptionChangeRating}/>Below <div className='slider'>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={Math.round( this.state.valuebelow * 10 ) / 10}
          onChange={this.sliderChange1}
        />
      </div></label>
    <label for="above"><Radio type="radio" id="above" name="rating" value="option2" checked={this.state.selectedOption2 === 'option2'} 
                      onChange={this.handleOptionChangeRating}/>Above <div className='slider'>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={Math.round( this.state.valueabove * 10 ) / 10}
          onChange={this.sliderChange2}
        />
      </div></label>
    <label for="between2"><Radio type="radio" id="between2" name="rating" value="option3" checked={this.state.selectedOption2 === 'option3'} 
                      onChange={this.handleOptionChangeRating}/>Between <div className='slider'>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={Math.round( this.state.valuebetween1 * 10 ) / 10}
          onChange={this.sliderChange3}
        />
      </div>
      <div className='slider'>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={Math.round( this.state.valuebetween2 * 10 ) / 10}
          onChange={this.sliderChange4}
        />
      </div>
      </label>

    
    <Button onClick={(e) => {this.handleClick(e)}}>Filter</Button>
    <Button >Clear</Button>
    </form>
    </div> */}
    
    </aside>
   
 );
 }
}
export default MovieFilters


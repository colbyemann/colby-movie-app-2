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

       handleClickClear = (e) => {
        e.preventDefault();
        //filter by rating
        this.props.searchClear(Math.random());
  

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
            <Button onClick={(e) => {this.handleClick(e)}} style={{ marginTop: 5 }}>Filter</Button>
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
          <Button onClick={(e) => {this.handleClickYear(e)}} style={{ marginTop: 5 }}>Filter</Button>
          </form>
        </Drawer>

        <div style={{ marginTop: 5, marginBottom: 5 }}>
          <Button type="primary" onClick={this.showDrawer3}>
            Rating
          </Button>
        </div>
        <Drawer
          title="Rating"
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
          <Button onClick={(e) => {this.handleClickRating(e)}} style={{ marginTop: 5 }}>Filter</Button>
        </Drawer>
        <Button onClick={(e) => {this.handleClickClear(e)}}>Clear</Button>
      </div>
    
    </aside>
   
 );
 }
}
export default MovieFilters


import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import '../Style/Shrink.css'

class SingleMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            appear: true,
            filter: true
        } 
        this.toggleFilter = this.toggleFilter.bind(this)
      }
    
      posterLink = "https://image.tmdb.org/t/p/w154/";


      componentWillReceiveProps() {
        // this.toggleFilter()
      }

      componentDidUpdate(){
        this.toggleFilter()
      }

      toggleFilter(){
          console.log('toggleFilter')
          this.setState({
            filter: !this.state.filter
        })
      }
    //   onChange={this.toggleFilter}
    render() {
        return  (       
            <CSSTransition  in={this.state.filter} unmountOnExit exit={true} timeout={3000} classNames="singleMovie"> 
                <tr className="" > 
                    <td>
                        <figure className="image is-fullwidth is-2by3">
                            <img src={this.posterLink + this.props.imageUrl} alt="Poster" />
                        </figure>
                    </td>
                    <td>{this.props.title}</td>
                    <td>{this.props.releaseDate}</td>
                    <td>{this.props.rating}</td>
                    <td className="">
                        <button className="button is-1"><FontAwesomeIcon icon={faHeart} className="fa fa-heart" /></button>
                        <Link to={"/Movies/Details?id=" + this.props.id} path={this.props.id} className="button is-1" style={{ margin: "0" }}>View</Link>
                    </td>
                </tr>
                </CSSTransition>   
        )
    }
}


export default SingleMovie;
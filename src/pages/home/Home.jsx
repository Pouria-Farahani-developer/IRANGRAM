
import Posts from "../../Components/Posts/Posts";
import Stories from "../../Components/stories/Stories";
import "./Home.scss"

const Home = () =>{
    return(
        <div className="Home">
            <Stories />
            <Posts />
        </div>
    )
}


export default Home;
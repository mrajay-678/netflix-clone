import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import {AiFillPlayCircle , AiOutlinePlusCircle} from 'react-icons/ai'


const api_key = "4ae6678572a341ef32b35567c44a7c3f";
const base_url = "https://api.themoviedb.org/3/";

const Row = ({ title, arr = [] }) => (
    <div className="row  m-0">
        <h2>{title}</h2>
        <div>
            {
                arr.map((popular, index) => (
                    <Card key={index} img={popular.poster_path} />
                ))
            }
        </div>
    </div>
)
const Card = ({ img }) => (
    <img className="video-list" src={`https://image.tmdb.org/t/p/w500${img}`} alt="" srcSet="" />
)


const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [populartv, setPopulartv] = useState([])
    const [topRated, settopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {

        const fetchData = async (mode, event, setArry) => {
            const { data: { results } } = await axios.get(`${base_url}/${mode}/${event}?api_key=${api_key}`)
            setArry(results)
            console.log(populartv)
        }
        fetchData("tv", "popular", setPopulartv);
        fetchData("movie", "popular", setPopularMovies);
        fetchData("movie", "top_rated", settopRated);
        fetchData("movie", "upcoming", setUpcoming);
    }, [])

    return (<>
        <div className="home">
            <div className="banner" style={{ backgroundImage: populartv[0] ? `url( https://image.tmdb.org/t/p/w500${populartv[0].backdrop_path})` : "rgb(16,16,16)" }}>
                {
                    populartv[0] &&
                    <h1>{populartv[0].name}</h1>
                }
                {
                    populartv[0] &&
                    <p>{populartv[0].overview}</p>
                }
                <div className="d-flex align-items-center">
                <div className="play-btn button-4"> <AiFillPlayCircle/> <span> PLAY</span> </div>
                <div className="add-list-btn button-4"><AiOutlinePlusCircle/> <span>ADD LIST</span> </div>
                </div>
            </div>
            <Row title={"Popular TV Show"} arr={populartv} />
            <Row title={"Popular Movie"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRated} />
            <Row title={"Upcoming Movie"} arr={upcoming} />
        </div>
    </>);
};

export default Home;

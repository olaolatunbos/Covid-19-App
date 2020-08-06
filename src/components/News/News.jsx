import React from "react";
import styles from './News.module.css';


class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0bc0e93a6a664c2a814058c3df75d249')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    articles: myJson.articles
                });
            });
    }
    render() {
        return (
            <div>
                {this.state.articles.map((item, index) => {
                    return(
                        <div className={styles.newslist}>
                            <div className={styles.newsinfo}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <a href={item.url}>{item.source.name}</a>
                                <p>{item.publishedAt.split("T")[0]}</p>
                            </div>
                            <div>
                                <img 
                                    src={item.urlToImage} 
                                    alt='article-images'
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default News;
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
/* this like function applies on post like button */
function like(e){
    const element = e.target;
    element.classList.toggle('changeColor');
    const thumbsUp = e.target.childNodes[0];
    if(thumbsUp.className == 'far fa-thumbs-up'){
        thumbsUp.className = 'fas fa-thumbs-up';
    }
    else{
        thumbsUp.className = 'far fa-thumbs-up';
    }
}
const Post = ({profile, name,date, time, post}) => {
    return (

        <div className="post">
        <div className="post_top_bar">
            <div>
                <img src={profile}/>
            </div>
            <div>
                <span>{name}</span>
                <p>{time} - {date}</p>
            </div>
        </div>
        <div>
            <img src={post}/>
        </div>
        <div className="emoji">
            <div className="bg_img"></div>
            <div className="bg_img"></div>
            <div className="bg_img"></div>
            <div className="bg_img"></div>
            <div className="bg_img"></div>
            <div className="bg_img"></div>
            <div className="bg_img"></div>
        </div>
        <div className="reactions">
            <button onClick={like}><i className="far fa-thumbs-up"></i>Like</button>
            <button><i className="far fa-comment-alt"></i>Comments</button>
            <button><i className="fas fa-share"></i>Share</button>
        </div>
        <div className="comment">
            <form id="commentForm">
                <div>
                    <img src={profile}/>
                </div>
                <input type="text" placeholder="Write a comment..."/>
            </form>
        </div>
    </div>
    )
}
ReactDOM.render(
    <div>
    <Post profile="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/126435904_2740947029493468_1372746916749511118_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=KbNK4UMkm6EAX-Qxr4A&_nc_ht=scontent-lga3-1.xx&oh=2f50f9e3433a5afd1f18157bd4b56efd&oe=5FEC1F3B" name="Muhaymin" date="02-12-2020" time="6:10 PM" post="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg" />
    
    <Post profile="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/104442692_2345916612369040_4850451426252442879_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=o8HqvizeaEcAX-KpInB&_nc_ht=scontent-lga3-1.xx&oh=bbc1b7a2a91465805d7b0918c083ba8b&oe=5FEC0077" name="Farhan" date="02-12-2020" time="7:05 PM" post="https://cdn.pixabay.com/photo/2020/11/26/07/43/wapiti-5778159_960_720.jpg" />
    
    <Post profile="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53407630_984854505040971_2702065265666949120_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=SqSHvHLjU2MAX-KzR-x&_nc_ht=scontent-lga3-1.xx&oh=ff4ff546e0a52b6870806d135f13c486&oe=5FED3078" name="Arsalan" date="02-12-2020" time="7:09 PM" post="https://cdn.pixabay.com/photo/2020/10/07/12/48/sail-5635065_960_720.jpg" />
    </div>, 
    document.querySelector('#root')
);
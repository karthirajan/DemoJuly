import './css/cardList.css';
import image1 from './image/e com women.jpg'
    
function CardList(){
    return(
        <>
        <h4>forum</h4>
<div className="container">
<div id="nav">
    
    <div  id="nav1" ><button className="btn btn-primary" id="btn" onclick="discussOpen()"> + New discussion</button></div>
    
   <div id="nav2" >
    <select id="sel"> 
        <option selected="">Latest</option>
        <option value="1">Popular</option>
        <option value="3">Solved</option>
        <option value="3">Unsolved</option>
        <option value="3">No Replies Yet</option>
    </select>
     <input type="search" placeholder="Search forum" id="search" />
   </div> 
</div>
   <div className="side-main">   
    
        <div id="sidebar">
            <div className="side1">All Threads</div>
            <div> Popular this week</div>
            <div>Popular All time</div>
            <div>Solved</div>
            <div>Unsolved</div>
            <div>No replies yet</div>
        </div>  
    
    <div id="main" className="card card-body">
        <div className="car " id="items1">
             <img src={image1} alt="" /> 
           <div> <h6>RealTime fetching data</h6>
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
             <div id="icon"><i className="far fa-eye"></i> 19 &nbsp; &nbsp;<i className="far fa-comment"></i> 3</div>
            <div><span id="name">drewdan</span> <span id="reply">replied</span> <span id="seen">13 minutes ago</span></div> 
        </div> </div>   
        <div className="car mt-3 " id="items1">
            <img src={image1} id="img1" alt="" /> 
           <div> <h6>RealTime fetching data</h6>
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
             <div id="icon"><i className="far fa-eye"></i> 18 &nbsp; &nbsp;<i className="far fa-comment"></i> 1</div>
            <div><span id="name">jlrdw</span> <span id="reply">replied</span> <span id="seen">3 hours ago</span></div> 
        </div> </div>   
        <div className="car mt-3" id="items1">
             <img src={image1}  alt="" /> 
           <div> <h6>RealTime fetching data</h6>
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
             <div id="icon"><i className="far fa-eye"></i> 32 &nbsp; &nbsp;<i className="far fa-comment"></i> 2</div>
            <div><span id="name">ciungulete</span> <span id="reply">replied</span> <span id="seen">7 hours ago</span></div> 
        </div> </div>   
        <div className="car mt-3 " id="items1">
            <img src={image1} id="img1" alt="" />
           <div> <h6>RealTime fetching data</h6>
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
             <div id="icon"><i className="far fa-eye"></i> 49 &nbsp; &nbsp;<i className="far fa-comment"></i> 9</div>
            <div><span id="name">bugsysha </span> <span id="reply">replied</span> <span id="seen">11 hours ago</span></div> 
        </div> </div>   
    </div>
    <div className="sidebar2"><i className="fas fa-sort-up" id="arrow"> <i className="fas fa-sort-down" id="arrow1"></i></i></div>
   </div>
    
</div>

<div className="contains">
    <div className="card" id="cards1" >
<div className="nav"> New discussion</div>
<div className="container">
<div>
    <label for="title" className="form-label mt-3">Title</label>
    <input type="text"  id="title" className="form-control mb-3" placeholder="Enter title" />
</div>
<div><input type="browse" placeholder="Attachment" className="form-control mb-3" /></div>
<hr />  <br /> <br />
<div className="button"><button className="btn" id="bt">cancel</button>
<button className="btn" id="bt1">Post</button></div>
</div>
</div>
</div> 
<div id="over"></div>

        </>
    )
}
export default CardList;
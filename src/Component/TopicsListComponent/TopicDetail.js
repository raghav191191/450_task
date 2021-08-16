import React from 'react';
import {Link} from 'react-router-dom'
import SingleTopic from '../TopicsListComponent/SingleTopic'
const TopicDetail  =({match}) =>{
    
 
    
    return(
      
        <div>
           <h3 class="text-center mb-4"><Link to="/">Topics</Link>/{match.params.topicSlug}</h3>
          
           <SingleTopic data={match.params.topicSlug}/>
           
        
        </div>
    )
}

export default TopicDetail
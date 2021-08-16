import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Progress from 'react-progressbar';
import TopicContent from '../TopicsListComponent/TopicContent'
class TopicsListComponent extends Component{
    
    render(){
        const Topics = [
            {
               
               
                topicName: "Array",
                position:0,
                startted:false,
                doneQuestions:0,
                questions:[
                    {  
                        TopicId : 1,
                        Topic : "Array",
                        Problm: "Reverse the array 3",
                        Done:true,
                        Url:"https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
                    },
                    {   
                        TopicId : 2,
                        Topic : "Array",
                        Problm: "Find the maximum and minimum element in an array",
                        Done:false,
                        Url:"https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
                    },
                    {    
                        TopicId : 3,
                        Topic : "Array",
                        Problm: "Find the 'Kth' max and min element of an array",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1"
                    },
                ]
            },
            {
               
               
                topicName: "Matrix" ,
                position:0,
                startted:false,
                doneQuestions:0,
                questions:[
                    {   
                        
                        Topic : "Matrix",
                        Problem: "Spiral traversal on a Matrix",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1"
                    },
                    {
                        
                        Topic : "Matrix",
                        Problem: "Search an element in a matriix",
                        Done:false,
                        Url:"https://leetcode.com/problems/search-a-2d-matrix/"
                    },
                    {
                      
                        Topic : "Matrix",
                        Problem: "Find median in a row wise sorted matrix",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1"
                    },
                ]
            },
            {
               
               
                topicName: "String",
                position:0,
                startted:false,
                doneQuestions:0,
                questions:[
                    { 
                        Topic : "String",
                        Problem: "Reverse a String",
                        Done:false,
                        Url:"https://leetcode.com/problems/reverse-string/"
                    },
                    {
                        
                        Topic : "String",
                        Problem: "Check whether a String is Palindrome or not",
                        Done:false,
                        Url:"https://practice.geeksforgeeks.org/problems/palindrome-string0817/1"
                    },
                    {   
                        
                        Topic : "String",
                        Problem: "Find Duplicate characters in a string",
                        Done:false,
                        Url:"https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"
                    },
                ]
            }
          ];
         // iterate localStorage
       
  
        
  
        return(
            <div>
                <ul className="course_list_items">
               {Topics.map((Topic, index) => (
                   
                    <li>
                      
                        <div className="course_list_items_inner">
                            
                           <Link to={Topic.topicName}>
                           <TopicContent data={Topic.topicName} />
                           
                           </Link>
                        </div>
                          
                    </li>
                       ))}
                </ul>
               
            </div>
        )
    }
}
export default TopicsListComponent


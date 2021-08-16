import React, { Component } from 'react'
import Progress from 'react-progressbar';
const Topics = [
    {
       
       
        topicName: "Array",
        position:0,
        startted:false,
        doneQuestions:0,
        questions:[
            {  
                Topicid : 1,
                Topic : "Array",
                Problem: "Reverse the array 3",
                Done:false,
                Url:"https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
            },
            {   
                Topicid : 2,
                Topic : "Array",
                Problem: "Find the maximum and minimum element in an array",
                Done:false,
                Url:"https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
            },
            {    
                Topicid : 3,
                Topic : "Array",
                Problem: "Find the 'Kth' max and min element of an array",
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
                Topicid : 1,
                Topic : "Matrix",
                Problem: "Spiral traversal on a Matrix",
                Done:false,
                Url:"https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1"
            },
            {
                Topicid : 2,
                Topic : "Matrix",
                Problem: "Search an element in a matriix",
                Done:false,
                Url:"https://leetcode.com/problems/search-a-2d-matrix/"
            },
            {
                Topicid : 3,
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
            {   Topicid : 1,
                Topic : "String",
                Problem: "Reverse a String",
                Done:false,
                Url:"https://leetcode.com/problems/reverse-string/"
            },
            {
                Topicid : 2,
                Topic : "String",
                Problem: "Check whether a String is Palindrome or not",
                Done:false,
                Url:"https://practice.geeksforgeeks.org/problems/palindrome-string0817/1"
            },
            {   Topicid : 3, 
                Topic : "String",
                Problem: "Find Duplicate characters in a string",
                Done:false,
                Url:"https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"
            },
        ]
    }
  ];

class TopicContent extends Component{
  
    render(){
        var TopicContent = JSON.parse(localStorage.getItem(this.props.data)); 
        console.log(this.props.data,this.props.data);
      
        if(TopicContent){
          var countTypes = TopicContent.filter(movie => movie.Done === true);
          var Totaltopic = TopicContent.length;
          var  remanigtopic = (TopicContent.length-countTypes.length);
          var progressval =  countTypes.length/TopicContent.length * 100;
          var withprogressval=parseFloat(progressval).toFixed(); //12.23
           console.log(this.props.data,progressval);
        }else{
            let objs = Topics.find(Topicval => Topicval.topicName === this.props.data);
            var totalquestion = objs.questions;
            console.log(this.props.data,totalquestion.length)
        }
      
     
        return(
            <div>
                <div  className="card_body" >
                    {progressval ? (
                           <div className="card_body_inner">
                               <div className="topic_name">
                        <h2>{this.props.data}</h2>
                    </div>
                    <p classname="totalQuestion">{TopicContent ? (
                    <span>Total Questions {Totaltopic}  <br/>{remanigtopic} More to go</span>
                        ) : (
                            <span>Total Questions {totalquestion.length} <br/>Not yet started</span>
                        )}   </p>

                        {progressval ? (
                            <div>  <p class="percent-Done"><b>{withprogressval}% Done</b></p><Progress completed={progressval} variant="success" /></div>
                            
                        ) : (
                        null
                        )}  
                               </div>
                        ) : (
                            <div  className="card_body_inner nonstart">
                            <div className="topic_name">
                     <h2>{this.props.data}</h2>
                 </div>
                 <p classname="totalQuestion">{TopicContent ? (
                 <span>Total Questions {Totaltopic}  <br/>{remanigtopic} More to go</span>
                     ) : (
                         <span>Total Questions {totalquestion.length} <br/>Not yet started</span>
                     )}   </p>
                    
                     {progressval ? (
                         <div>
                           
                             <Progress completed={progressval} variant="success" />
                             </div>
                        
                     ) : (
                     null
                     )}  
                            </div>
                    )}  
                    
               </div>
              
                 
            </div>
        )
    }
}
export default TopicContent;
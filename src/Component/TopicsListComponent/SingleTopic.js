import React, { Component }  from 'react'


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
class SingleTopic extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          value: [],
          textvalue : "",
          test:""
          
        }
        
    }
    
    toggleCheckboxChange = (e) => {
        e.preventDefault();
       
        if (e.target.type === 'checkbox') {
            let tt = e.target.value;
           this.state.value.push(e.target.id)
           this.setState(
             this.state
           )
         
            let obj = Topics.find(Topicval => Topicval.topicName === this.props.data);
            var newobj = obj.questions;
            var storedColors = JSON.parse(localStorage.getItem(this.props.data)); 

            if(storedColors){
                var storedColors = JSON.parse(localStorage.getItem(this.props.data)); 
            }else{
                var snewobj  = localStorage.setItem(this.props.data, JSON.stringify(newobj));
                var storedColors = JSON.parse(localStorage.getItem(this.props.data)); 
            }
           
            var objIndex = storedColors.findIndex((obj => obj.Topicid == tt));
            storedColors[objIndex].Done = true;
            //localStorage.clear(this.props.data);
          
            var snewobj2  = localStorage.setItem(this.props.data, JSON.stringify(storedColors));
           
               
               }
     }
    render(){
        
          let obj = Topics.find(Topicval => Topicval.topicName === this.props.data);
          const alert = this.props.alert;

          
          
        
          var storedColors = JSON.parse(localStorage.getItem(this.props.data));
          //console.log('bbbbbbbbbbb',storedColors);
        return(
            <div className="single-topics">
                <table  striped bordered hover size="sm">
                <thead>
                    <tr>
                       <th data-row-selection="true">
                           
                       </th>
                       <th  style={{width: "100px"}}>
                       Q-Id
                       </th>
                       <th>
                       Questions
                       </th>
                   </tr>
               </thead>
               
               {storedColors ? (
                      <tbody>
                          {
                          storedColors.map((questionval  ,index)=>questionval.Done=== false ? (
                       
                       <tr className="1">
                           <td > <input  type="checkbox" className="custom-control-input checksave" id={questionval.TopicId}  name="question[]" value={questionval.Topicid} onChange={this.toggleCheckboxChange} /></td>
                           <td>
                           {questionval.Topicid}
                            </td>
                            <td>
                            <a href={questionval.Url} target="_blank">{questionval.Problem}</a>
                            </td>
                       </tr>
                      ):(
                       null
                      )
                       )
                              
                          }
                          {storedColors.map(questionval =>questionval.Done === true ? (
                       <tr className="2" style={{background: "rgb(200, 230, 201)"}}>
                           <td><input type="checkbox"   checked /></td>
                           <td>
                           {questionval.Topicid}
                            </td>
                            <td>
                            <a href={questionval.Url} target="_blank">{questionval.Problem}</a>
                            </td>
                       </tr>
                      ):(
                       null
                      )
                       )}
                          </tbody>
                    
                ) : (
                    <tbody>
                    {obj.questions.map((questionval  ,index)=>questionval.Done=== false ? (
                       
                       <tr className="3">
                           <td><input type="checkbox" className="custom-control-input checksave" id={questionval.TopicId}  name="question[]" value={questionval.Topicid} onChange={this.toggleCheckboxChange} /></td>
                           <td>
                           {questionval.Topicid}
                            </td>
                            <td>
                            <a href={questionval.Url} target="_blank">{questionval.Problem}</a>
                            </td>
                       </tr>
                      ):(
                       null
                      )
                       )}
                           {obj.questions.map(questionval =>questionval.Done === true ? (
                       <tr className="4" style={{background: "rgb(200, 230, 201)"}}>
                           <td><input type="checkbox"   checked /></td>
                           <td>
                           {questionval.Topicid}
                            </td>
                            <td>
                            <a href={questionval.Url} target="_blank">{questionval.Problem}</a>
                            </td>
                       </tr>
                      ):(
                       null
                      )
                       )}
                    </tbody>
                  
                )}
                  
                    
              
            </table>
            </div>
        )
    }
}

export default SingleTopic;
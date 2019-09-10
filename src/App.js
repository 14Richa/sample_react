import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className = "ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author = "Sam" 
          timeAgo = "Today at 4:30Pm" 
          comment = "Nice Blog Post!" 
          avatar = {faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      
      <CommentDetail 
      author = "Alex" 
      timeAgo = "Today at 5:30Pm" 
      comment = "Great Blog Post!" 
      avatar = {faker.image.avatar()} />

      </ApprovalCard>

     <ApprovalCard>
     <CommentDetail  
     author = "John" 
     timeAgo = "Today at 6:30Pm" 
     comment = "Nice Post!" 
     avatar = {faker.image.avatar()}/>
     </ApprovalCard>
    </div>
    );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import CommentDetails from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!!!</h4>
                    Are you sure you want to delete this??
                </div>
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetails
                    author="Sam"
                    time="Today at 6.00PM"
                    imgAvatar={faker.image.avatar()}
                    content="Nice post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetails
                    author="Alex"
                    time="Today at 10.45AM"
                    imgAvatar={faker.image.avatar()}
                    content="Love this post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetails
                    author="Jane"
                    time="Yesterday at 2.25PM"
                    imgAvatar={faker.image.avatar()}
                    content="I liked this post very much :-)"
                />
            </ApprovalCard>


        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector("#root"),
);
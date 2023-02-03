import React from "react";

export class Age extends React.Component{
    render(){
        return (
            <div>
                <p>You age is: {this.props.age}</p>
            </div>
        )
    }
}
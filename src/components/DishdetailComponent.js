import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishdetail: this.props.dish,
        }
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            );
        else
            return (
                <div></div>
            );
    }
    renderComments(comments) {
        const c = this.props.dish.comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <h2>{comment.author}</h2>
                </div>
            );
        });
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                        {c}
                    </div>
            )
        }
        else
            return (
                <div></div>
            );
    }
    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        )
    }
};

export default DishDetail;
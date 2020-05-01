import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishdetail: this.props.selectedDish,
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
    renderComments(dish) {
        if (dish != null)
            {
                if(dish.comments!=null)
                {
                    const dishcomments = dish.comments.map((comment) => {
                        return(
                            <div key = {comment.id}>
                                <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                            </div>
                        )
                    })
                    return(
                        <div>
                            <h4>Comments</h4>
                    <div>{dishcomments}</div>
                        </div>
                    );
                }
                else
                {
                    return (
                        <div></div>
                    );
                }

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
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )
    }
};

export default DishDetail;
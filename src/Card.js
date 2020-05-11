/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'
import {FaEnvelope, FaMapMarked, FaPhone, FaMapMarkedAlt, FaMailBulk, FaMailchimp, FaGoogle, FaYahoo, FaDotCircle} from 'react-icons/fa'
import { AiOutlineAlignRight, AiOutlineDoubleRight, AiOutlineSmallDash, AiOutlineDown, AiOutlineDownCircle } from 'react-icons/ai'
const idCard = ({details}) => {
const blankSpace =" "

    return (
        <Card style={{boxShadow:"#2F363F 1px 1px 100px",borderRadius:"20px"}}>
            <CardBody className="text-center">
                <img
                id="a"
                height="170"
                width="170"
                className="rounded-circle img-thumbnail border-secondary myImg"
                src={details.picture?.large}
                loading="lazy"
                 />
                <CardTitle
                className="text">
                    <h2 style={{
                        textShadow:"#2C3335 1px 2px 3px",
                        fontWeight:"bolder",
                        color:"#EA7773"}}>

                        {details.name?.title}
                        <AiOutlineDoubleRight style={{marginRight:"10",marginLeft:"5"}} size="20" color="black" />
                        {details.name?.first}
                            {blankSpace}
                        {details.name?.last}

                    </h2>
                </CardTitle>
                {/* <hr/> */}
                <AiOutlineDownCircle size="30" color="gray"
                style={{boxShadow:"black 1px 1px 5px",borderRadius:"100px"}} />
                <CardText>
                    <span style={{fontWeight:"bolder"}}>
                        <FaMapMarkedAlt
                        style={{
                            marginRight:"5",
                            fontSize:"25",
                        }} />
                        {details.location?.city}
                    </span>

                    <br/>

                    <span style={{fontWeight:"bolder"}}>
                    <FaPhone style={{marginRight:"5"}} />
                        {details.phone}
                    </span>

                    <br/>

                    <span style={{fontWeight:"bolder"}}>
                        <FaMailBulk style={{marginRight:"5",fontsize:"25"}} />
                        {details.email}
                    </span>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default idCard;
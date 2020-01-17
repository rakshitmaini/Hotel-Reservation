import React, { Component } from 'react'
import {FaCocktail, FaBeer, FaShuttleVan, FaHiking} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title:"Free Cocktails",
                info:"lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            },
            {
                icon: <FaHiking/>,
                title:"Endless Hiking",
                info:"lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            },
            {
                icon: <FaShuttleVan/>,
                title:"Free Shuttle Van",
                info:"lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            },
            {
                icon: <FaBeer/>,
                title:"Complimentary Beer",
                info:"lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            }
        ]
    }
    render() {
        return (
            <div className="section-services">
                <Title title="Services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return (
                                <article key={index} className="services">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

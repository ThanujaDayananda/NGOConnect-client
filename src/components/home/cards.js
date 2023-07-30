import React, { Component } from "react";

export default class Card extends Component {
  state = [
    {
      title: "Help By Donation",
      desc:
        "We are a non-profit, non-government organization making a lasting impact. Your support uplifts lives and brings about positive change. Join thousands like you in making a difference for those in need. Together, we can create a better world.",
      btn: "Donate Now",
      href: "/donate",
    },
    {
      title: "Help By Inspiring",
      desc:
        "Our mission is to inspire others to lend a helping hand, making the world a better place for everyone.Join us in our journey to create a compassionate and caring society where hope and kindness prevail.",
      btn: "Create A Event",
      href: "/events",
    },
    {
      title: "Volunteer",
      desc:
        "Volunteering  is a fulfilling and impactful way to contribute to society. We address social, environmental, and humanitarian issues etc. Join us for flexible volunteering options and help create positive social change.",
      btn: "Join As Volunteer",
      href: "/signup",
    },
  ];

  render() {
    return (
      <div className="card card-cause">
        <img src={this.props.img} alt="title of card"></img>
        <div className="card-body">
          <h2 className="card-title title-of-card">
            {this.state[this.props.id].title}
          </h2>
          <br />
          <p className="card-text">{this.state[this.props.id].desc}</p>
          <a
            href={this.state[this.props.id].href}
            className="btn btn-warning btn-text"
          >
            {this.state[this.props.id].btn}
          </a>
        </div>
      </div>
    );
  }
}

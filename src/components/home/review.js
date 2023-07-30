import React, { Component } from "react";

export default class Review extends Component {
  state = [
    {
      name: "Archana Tiwari",
      time: " Fri 16, 17:25:33",
      review:
        "This NGO's commendable work for the needy is truly admirable. I feel inspired to join and support their mission. Their efforts in providing education and shelter to underprivileged kids are making a significant difference. I'm proud to be part of this journey and contribute wholeheartedly. Together, we can create a brighter future for these deserving children.",
    },
    {
      name: "Kartik Singh",
      time: " Fri 16, 17:25:33",
      review: "Last week I went to Orissa and was surprised to note some people praising a group of students for the volunteer work they did during the earthquake a few years back. It was none other than Arya NGO. I had heard a lot about them in Orissa. This is the first time I saw in person the good work they did.",
    },
    {
      name: "Ayush Jain",
      time: " Fri 14, 18:25:33",
      review: "The Samrudhi NGO is truly an outstanding organization that is making a real difference in the lives of those in need. Their volunteer work during the earthquake in Orissa was highly praised by the local community.",
    },
  ];

  render() {
    var i = Math.ceil(Math.random() * 8);
    var str = "http://bootdey.com/img/Content/avatar/avatar" + i + ".png";
    return (
      <div>
        <div class="reviews-members review-container pt-4 pb-4">
          <div class="media">
            <div className="image">
              <img
                alt="Generic placeholder"
                src={str}
                class="mr-3 rounded-pill"
              />
            </div>
            <div class="reviews-members-header">
              <h6 class="mb-1">
                <a class="text-black" href="/profile">
                  {this.state[this.props.id].name}
                </a>
              </h6>
              <p class="text-gray">{this.state[this.props.id].time}</p>
            </div>
            <div class="reviews-members-body">
              <h3> {this.state[this.props.id].review}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

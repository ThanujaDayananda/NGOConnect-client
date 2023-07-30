import React, { Component } from "react";

export default class Newslist extends Component {
  state = [
    {
      id: 1,
      title: "NGOs meet in Bengaluru to deliberate on improving lives of marginalised communities.",
      desc: {
        less:
          "  Over the next 5 years, Rebuild is working on supporting 500 community-led NGOs in building their resilience. These organizations have been affected by the pandemic and have limited access to funds.",
        more:
          "https://indianexpress.com/article/cities/bangalore/ngos-meet-in-bengaluru-to-deliberate-on-improving-lives-of-marginalised-communities-8849012/",
      },
      poster:
        "https://images.indianexpress.com/2023/07/cover-8.jpg?resize=450,250",
    },
    {
      id: 2,
      title: "NGO that took over RMC’s cattle pound seeks govt help",
      desc: {
        less:
          "The NGO took over the cattle pound on Bhavnagar Road early in October 2022, after it emerged as the bidder who had demanded the lowest grant for maintenance of cattle impounded by the civic body.",
        more:
          "https://indianexpress.com/article/cities/rajkot/ngo-that-took-over-rmcs-cattle-pound-seeks-govt-help-8369187/",
      },
      poster:
        "https://images.indianexpress.com/2023/01/At-the-RMC-cattle-pound-on-Bhavnagar-Road-in-Rajkot.-Express.jpg?resize=450,250",
    },
    {
      id: 3,
      title: "This summer, social work, internships keep students busy",
      desc: {
        less:
          "For many, summer holidays also mean a chance to help the needy or know more about the neighbourhood.",
        more:
          "https://indianexpress.com/article/cities/mumbai/this-summer-social-work-internships-keep-students-busy/",
      },
      poster:
        "https://images.indianexpress.com/2015/04/vacation-2.jpg?resize=450,250",
    },
    {
      id: 4,
      title: "IGNOU launches online bachelor’s programme in social work ",
      desc: {
        less:
          "Anyone who has passed class 12 or an equivalent grade is eligible to apply for the programme. The BSW graduates would get an opportunity to work in socially relevant areas.",
        more:
          "https://indianexpress.com/article/education/ignou-launches-online-bachelors-programme-in-social-work-ignouiop-samarth-edu-in-7736645/",
      },
      poster:
        "https://images.indianexpress.com/2021/07/IGNOU-1.jpg?resize=450,250",
    },
    {
      id: 5,
      title: "70-yr-old engineer teaches poor children in makeshift tents",
      desc: {
        less:
          `While it began with individual stories of the Khurana couple funding the education, first of their driver's son and then of a blind girl student of the college where his wife was a principal, it soon took shape of a school called 'Nai Kiran Universal School.'`,
        more:
          "https://indianexpress.com/article/education/70-yr-old-engineer-teaches-poor-children-in-makeshift-tents/",
      },
      poster:
        "https://images.indianexpress.com/2016/03/jd-khurana_480.jpg?resize=450,250",
    },
    {
      id: 6,
      title: "MHA allegations vague, will explore all legal remedies: CHRI on FCRA cancellation",
      desc: {
        less:
          "Commonwealth Human Rights Initiative (CHRI) said one of the grounds for cancellation is totally vague and cannot even be explained and that it will explore all legal remedies to reverse the cancellation.",
        more:
          "https://indianexpress.com/article/india/mha-allegations-vague-will-explore-all-legal-remedies-chri-on-fcra-cancellation-7891476/",
      },
      poster:
        "https://images.indianexpress.com/2022/04/CHRI.jpg?resize=450,250",
    },
    {
      id: 7,
      title: "Pandemic forced students to drop out of school, turn to child labour!",
      desc: {
        less:
          "ActionAid Association and Slum Mahila Sanghatane conducted a public hearing on the impact of Covid-19 on Children's Education on March 22 in Bengaluru and the report was a part of the public hearing.",
        more:
          "https://indianexpress.com/article/cities/bangalore/report-pandemic-forced-students-to-drop-out-of-school-turn-to-child-labour-7880744/",
      },
      poster:
        "https://indianexpress.com/wp-content/uploads/2022/04/1-244.jpg?resize=450,250",
    },
  ];

  render() {
    function myFunction(e) {
      e.preventDefault();
      var i = e.target.getAttribute("value");
      var btnStr = "read-more-btn" + i;
      var moreStr = "more" + i;
      var dotStr = "dots" + i;
      var dots = document.getElementById(dotStr);
      var moreText = document.getElementById(moreStr);
      var btnText = document.getElementById(btnStr);
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }

    var list = [];
    this.state.forEach((news) => {
      var btnStr = "read-more-btn" + news.id;
      var moreStr = "more" + news.id;
      var dotStr = "dots" + news.id;
      list.push(
        <p>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{news.title}</h5>
              <div className="news-detail">
                <img className="" src={news.poster} alt="news poster" />
                <div className="text-of-news">
                  <p class="card-text">
                    {news.desc.less}
                    <span id={dotStr} style={{ display: "inline" }}>
                      ....
                    </span>
                    <span id={moreStr} style={{ display: "none" }}>
                      {news.desc.more}
                    </span>
                  </p>
                  <a
                    href="/"
                    id={btnStr}
                    value={news.id}
                    onClick={myFunction}
                    class="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </p>
      );
    });

    return (
      <div>
        <div className="list-container">{list}</div>
      </div>
    );
  }
}

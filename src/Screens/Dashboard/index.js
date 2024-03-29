import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import StatCard from "../../Components/StatsCard/index.js";
import { stats } from "../../Config/Data";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'Medical Portal | Dashboard';

    // document.querySelector('.loaderBox').classList.remove("d-none");
    const LogoutData = localStorage.getItem('login');

    // fetch('https://custom.mystagingserver.site/parcel_safe_app/public/api/admin/dashboarddata',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${LogoutData}`
    //     },
    //   }
    // )

    //   .then(response =>
    //     response.json()
    //   )
    //   .then((data) => {
    //     document.querySelector('.loaderBox').classList.add("d-none");
    //     console.log(data)
    //     setStatistics(data)
    //   })
    //   .catch((error) => {
    //     document.querySelector('.loaderBox').classList.add("d-none");
    //     console.log(error)
    //   })

  }, []);


  const optionData = [
    {
      code: 0,
      name: 'Monthly'
    },
    {
      code: 1,
      name: 'Yearly'
    }
  ]


  console.log(statistics)

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.total_user}</h3> */}
                          <h3 className="statsNumber">10</h3>
                          <p className="statsText">Total Users</p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.issue_pending}</h3> */}
                          <h3 className="statsNumber">12</h3>
                          <p className="statsText">Medical Reports</p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <div className="statsContent">
                        <div className="statsData">
                          {/* <h3 className="statsNumber">{statistics.data?.total_issues}</h3> */}
                          <h3 className="statsNumber">5</h3>
                          <p className="statsText">Total Subscription</p>
                        </div>
                      </div>
                      <div className="statsChange">
                        <p>
                          100%
                          <FontAwesomeIcon
                            icon={faArrowCircleUp}
                            className="me-2 redColor"
                          />


                        </p>
                        <p>Since last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="d-flex flex-wrap justify-content-between">
                  <h3 className="mainTitle">Total Users</h3>
                  <SelectBox selectClass="mainInput" name="Monthly" required option={optionData}

                  />
                </div>
                <div className="graph-wrapper">
                  <CChart
                    type="bar"
                    height="90"
                    options={{
                      scales: {
                        y: {
                          suggestedMin: 0,
                          suggestedMax: 40,
                        },
                      },
                    }}
                    data={{
                      labels: ["Nov 2010", "March 2011", "July 2012", "Augest 2013", "Augest 2014"],
                      tension: "0.5",
                      datasets: [
                        {
                          label: "Active Users",

                          backgroundColor: "#b49358",
                          borderColor: "#b49358",
                          pointBackgroundColor: "#b49358",
                          pointBorderColor: "#b49358",
                          borderWidth: 1,
                          data: [35, 30, 35, 30, 35],
                          tension: 0.5,
                        },
                        {
                          label: "Inactive Users",
                          backgroundColor: "#051b23",
                          borderColor: "#051b23",
                          pointBackgroundColor: "#051b23",
                          borderWidth: 1,
                          pointBorderColor: "#051b23",
                          data: [30, 35, 30, 35, 30],
                          tension: 0.5,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

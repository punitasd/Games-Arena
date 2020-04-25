import React from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import data from "./data.js";
export default class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    /* 
    this api is not accessible because it's http api so it's not accessibe by https site
    so I am importing sample data from data.js file and using that data to load table
     */
    axios
      .get("http://starlord.hackerearth.com/gamesext")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        let tableData = data.map(item => {
          return [
            item.title,
            item.platform,
            item.score,
            item.genre,
            item["editors_choice"],
            item["release_year"]
          ];
        });
        this.setState({ data: tableData });
      });
  }
  render() {
    const columns = [
      "title",
      "platform",
      "score",
      "genre",
      "editors_choice",
      "release_year"
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"Game Details"}
        data={this.state.data}
        columns={columns}
        options={options}
      />
    );
  }
}

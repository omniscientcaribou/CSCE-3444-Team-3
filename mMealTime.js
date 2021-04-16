window.onload = function getTable() {
  const url = "https://swe3444.herokuapp.com/api/mealtimes/";
  fetch(url)
  .then(response => {
    // console.log(response);
    return response.text();
  })
  .then(data => {
    // console.log(data);
    var json = JSON.parse(data);
    // console.log(json[0].start_hour + ":00");
    document.getElementById('time1').selectedIndex = json[0].start_hour - 7;
    document.getElementById('time2').selectedIndex = json[0].end_hour - 7;
    document.getElementById('time3').selectedIndex = json[1].start_hour - 7;
    document.getElementById('time4').selectedIndex = json[1].end_hour - 7;
    document.getElementById('time5').selectedIndex = json[2].start_hour - 7;
    document.getElementById('time6').selectedIndex = json[2].end_hour - 7;
    document.getElementById('time7').selectedIndex = json[3].start_hour - 7;
    document.getElementById('time8').selectedIndex = json[3].end_hour - 7;
  });
}

async function submit() {
  // console.log(document.getElementById('time6').selectedIndex + 7);
  fetch("https://swe3444.herokuapp.com/api/mealtimes/1/", {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        id: 1,
        name: "breakfast",
        start_hour: document.getElementById('time1').selectedIndex+7,
        end_hour: document.getElementById('time2').selectedIndex+7
      }
    )
  })

  fetch("https://swe3444.herokuapp.com/api/mealtimes/2/", {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        id: 2,
        name: "lunch",
        start_hour: document.getElementById('time3').selectedIndex+7,
        end_hour: document.getElementById('time4').selectedIndex+7
      }
    )
  })

  fetch("https://swe3444.herokuapp.com/api/mealtimes/3/", {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        id: 3,
        name: "dinner",
        start_hour: document.getElementById('time5').selectedIndex+7,
        end_hour: document.getElementById('time6').selectedIndex+7
      }
    )
  })

  fetch("https://swe3444.herokuapp.com/api/mealtimes/4/", {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        id: 4,
        name: "happy hour",
        start_hour: document.getElementById('time7').selectedIndex+7,
        end_hour: document.getElementById('time8').selectedIndex+7
      }
    )
  })
}

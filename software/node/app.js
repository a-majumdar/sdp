const express = require("express");
const app = express();


app.post("/openVent", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eVentOpen";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  // console.log("inside the system " + thecmd);
  var ssh_options = new SSH({
    host: "abomasnow",
    user: "pi",
    pass: "r00t",
  });
  //'echo "!eVentOpen.py" > file.txt'
  ssh_options
    .exec(thecmd, {
      out: console.log.bind(console),
    })
    .start();

  console.log("Executing command " + cmd);
  
  res.redirect("/MyProp");
});

app.post("/closeVent", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eVentClose";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  // console.log("inside the system " + thecmd);
  var ssh_options = new SSH({
    host: "abomasnow",
    user: "pi",
    pass: "r00t",
  });
  //'echo "!eVentOpen.py" > file.txt'
  ssh_options
    .exec(thecmd, {
      out: console.log.bind(console),
    })
    .start();

  console.log("Executing command " + cmd);
  
  res.redirect("/MyProp");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

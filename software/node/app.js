const express = require("express");
const app = express();

app.post("/heat", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "heat";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  
  var ssh_options = new SSH({
    host: "abomasnow",
    user: "pi",
    pass: "r00t",
  });
  
  ssh_options
    .exec(thecmd, {
      out: console.log.bind(console),
    })
    .start();

  console.log("Executing command " + cmd);

  res.redirect("/MyProp");
});

app.post("/water", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "led1";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  
  var ssh_options = new SSH({
    host: "abomasnow",
    user: "pi",
    pass: "r00t",
  });
  
  ssh_options
    .exec(thecmd, {
      out: console.log.bind(console),
    })
    .start();

  console.log("Executing command " + cmd);

  res.redirect("/MyProp");
});


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

app.post("/heat", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "heat";
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

app.post("/moveProp", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 10");

  res.redirect("/MyProp");
});
app.post("/moveProp20", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 20");

  res.redirect("/MyProp");
});
app.post("/moveProp30", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 30");

  res.redirect("/MyProp");
});
app.post("/moveProp40", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 40");

  res.redirect("/MyProp");
});
app.post("/moveProp50", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 50");

  res.redirect("/MyProp");
});
app.post("/moveProp60", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 60");

  res.redirect("/MyProp");
});
app.post("/moveProp70", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 70");

  res.redirect("/MyProp");
});
app.post("/moveProp80", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 80");

  res.redirect("/MyProp");
});
app.post("/moveProp90", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 90");

  res.redirect("/MyProp");
});
app.post("/moveProp100", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 100");

  res.redirect("/MyProp");
});
app.post("/moveProp0", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "eScript";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 0");

  res.redirect("/MyProp");
});
app.post("/sunTrack", (req, res) => {
  const SSH = require("simple-ssh");
  const cmd = "sunMechanism1";
  const thecmd = 'echo "!' + cmd + '.py" > file.txt';
  //  console.log("inside the system " );
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

  console.log("Executing command move 0");

  res.redirect("/MyProp");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

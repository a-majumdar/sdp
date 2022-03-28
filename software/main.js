
const ssh = (cmd) => {
	const SSH = require('simple-ssh');
	const thecmd = 'echo \"!' + cmd +'.py\" > file.txt';
    console.log('inside the system ' + thecmd)
    var ssh_options = new SSH({
        host: "abomasnow",
        user: "pi",
        pass: "r00t"
    });
    //'echo "!eVentOpen.py" > file.txt'
    ssh_options.exec(thecmd, {
        out: console.log.bind(console)
    }).start();
}

ssh('eVentClose');

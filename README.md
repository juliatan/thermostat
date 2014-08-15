Thermostat Interface
====================

The challenge is to create a simple interface for a digital thermostat, using JavaScript, jQuery and Jasmine.

Specifications
--------------

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting the reset button
- The thermostat should color the display based on energy usage 
  - < 18 is green
  - < 25 is yellow
  - otherwise red
- After every temperature change, the thermostat displays the new temperature

Technologies used
-----------------

- Javascript
- jQuery
- Jasmine
- HTML5
- CSS3

How to run program
------------------
```sh
git clone https://github.com/juliatan/thermostat
cd thermostat
open index.html
```

How to run tests
----------------
```sh
cd thermostat
open SpecRunner.html
```

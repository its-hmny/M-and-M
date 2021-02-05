# M&M
Web-related Technologies course project a.a. 2019-2020

## What is
This project is meant to create a WebApp which can be used by a person to create a sort of digital Treasure Hunt and publish it on our platform where it can be played by others with their smartphone.  
Some practical use cases can be:
- Create a story for a museum in wich the player can interact with the exposition and at the same time learn facts and notion about the item exposed in a playful way
- Create a story to be played in homes by childrens (both educational or not) in lockdowns
- Create a story to teach contents in a playful way during lesson time especially in elementary school 

## How to
Before dong anything you need to install all the dependencies:
``` console
usr@computer:~/TwitterTracker$ cd frontend && yarn install
usr@computer:~/TwitterTracker$ cd backend && yarn install
```
To start the development servers simply run: (alternatively you can start distinctly both the client and the server)
``` console
usr@computer:~/TwitterTracker$ yarn start:server
usr@computer:~/TwitterTracker$ yarn start:client
```
If you want to use a production build simply build the frontend and copy the resulting build folder in frontend/ to /backend/ then start the server as always.  
There's also a 'deploy' branch with the last version builded where you need only to start the server.

## Credits
This project was made by [me](https://github.com/its-hmny), [Mattia Guazzaloca](https://github.com/mettz), [Paolo Marzolo](https://github.com/pollomarzo), [Eduard Marchidan](https://github.com/Muduard) as an assignment for the Web-related technologies course at University  of Bologna.  
Special thanks to [Alessia Garbarino](https://www.behance.net/alessiagarbarino/) for the site logo.  
A demo with some stories made by us will be temporary avaiable [here](http://site192024.tw.cs.unibo.it).

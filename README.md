This tutorial was built in reference to [JAMstack Course By FreeCodeCamp](https://www.youtube.com/watch?v=A_l0qrPUJds)

# What is JAMstack?
It stands for JS/API/Markup and is a stack of technology used to build fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN(Content Delivery Network), removing the requirements to manage or run web servers.

## How Things Used to Be & Are Now
You would ask for stuff and get stuff
{} > {} Ask for stuff
{} < {} Get stuff
Web servers came along and then there would are complex infrastructures using load balancers going to multiple web servers that would request stuff from DB servers to speed up the information
{} > {Load Balancers} > {Web Server} > {DB Server} Ask
{} < {Load Balancers} < {Web Server} < {DB Server} Retrieve

## How the LAMPstack works to compare
Popular stacks such as the LAMPstack (Linux, APACHE, MySQL, PHP) are great but over time may require more servers. In a typical scenario the LAMPstack works like this:
* APACHE for http routing and serving
* PHP for preprocessing
* MySQL for data access
* Linux is the operating system
* These make up the entire web server

## How the JAMstack works
It's about pre-rendering and leveraging the browser without a webserver. The way the JAMstacks works works is like this:
- APIs is the data access
- Javascript & Markup is considered the browser and the runtime
- Static Server / CDN takes care of the http routing and serving

## How Does the LAMPstack & JAMstack Compare?
With JAMstack the stack has simply moved up a level to the browser. Doesn't deal with OS infrastructure, deals with a runtime provided to us in the browser to do things we need.

## Motives For Pre-Rendering
Do the work now, so your servers don't have to later. It lightens the load and request time. Puts distance between the complexity and the user. "Bake, Don't Fry"...things were much simply when we would ask for stuff and get stuff. This can simplify deployments.

{JAMstack} > CDN <--- Can use version control with Git for EVERYTHING and reach all the way through to hosting environment and hosting process

## Advantages of JAMstack
1. Security: A greatly reduced surface area, the infrastructure is simpler and less moving parts, making it more manageable
2. Performance: Traditional stacks add static layers(caching) in order to improve performance. Everytime we deploy in JAMstack it is updated to server cache and there is no logic behind it. Caching is hard...period. So simplifying it makes things easier.
3. Scale: Traditional stacks add infrustructure to scale with the load balancers, web servers, and DB servers. JAMstack already has everything cached and is already in an optimal position, was designed to handle things at a much faster load time.

## Enablers
Enablers help JAMstack, enablers are:
- Static Site Generators (SSG)
- Tooling And Automation
- Browser Capabilities
- Services And The API Economy
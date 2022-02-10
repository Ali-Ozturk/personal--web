# Portfolio 



### Existing issues

**Portfolio page** `/`

* BUG: Navigation is not click through when mouse is hovering over work, it's fixed-top and contains 100% width. Should perhaps be only logo width based on `onComplete` for navigation animation
* BUG: Oncomplete background animation the work is shown. Should be a more smooth reveal  
* BUG: Navigation animation is anchored to 100vh - if you refresh the page while at the bottom the navigationbar is still shown. Should be anchored to top of work div
* TODO: Beautify the Tippy box when hovering over work
* TODO: Make locale extension
* TODO: Make a proper footer - find inspiration on a simple approach
  * Maybe some animation for extra wow effect



### To be implemented in prioritized order

1. **Generic work page** `/work/{id}`

   Important! The generic part is only for primary layout. Each page should have it's own feel that is tailored for each project.

2. **About page** `/about`

3. **Contact page** `/contact`



### Brainstorm and ideas

* Add some kind of list that show a list of technologies I've worked with. Upon clicking it shows links to work with that keyword associated

  * Utilizes the `PortfolioData` structure

* **Portfolio content**

  1. Patienttavlen (PHP, ReactJS, MSSQL)
  2. AIS Data warehouse (PostgreSQL, PostGIS, Python, ReactJS, (?) PygramETL, C#)

   


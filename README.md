# KiwisParadise-Admin

This is an admin website for Kiwi's Paradise. The items that are displayed in this website are taken from the same MYSQL database used in my eCommerce website, Kiwi's Paradise. Admins are able to use the CRUD methods on the products on the eCommerce website. Admins can add in a new item to put on the store, edit items, and delete items if necessary. This admin site was built with a react UI and a C# server. 

## Getting Started

Clone or download this repo onto your local machine. Once you have done this, install the node packages. You can do this by running ```npm i``` on your command line tool. You would then need to go inside of the directory where the client lies. To do this, you would need to run ```cd ClientApp``` on your command line tool. After doing this, you would then need to run ```npm i``` again to download the dependencies needed for the UI. You would also need to have the database named and structed similarly towards Kiwi's Paradise's database, in order to see the current products in the store.


## Running the app

After you have installed all of the dependencies that are needed for this project, you can open the project up through your command line tool. First be in the root of the directory and then run ```dotnet run``` in your command line tool. This will start the C# server. To run the react UI, you would need to open up another terminal and direct yourself inside of the ClientApp directory by ```cd ClientApp```. After changing directories, you can start the react App by running ```npm run start``` in your command line. Once you have the C# server up alongside with the react app, you will be able to see the products show up on the site.


## Stopping the app

To stop running the server and the react app, you can hit ```command + z``` to close both.


## CRUD METHODS

### Read
![Read Method](https://github.com/l-yang-05/KiwisParadise-Admin/blob/master/work/image/read-Admin.png)

#### CREATE
![Create Method](https://github.com/l-yang-05/KiwisParadise-Admin/blob/master/work/image/add-Admin.gif)

### UPDATE
![Update Method]()

### DELETE
![Delte Method]()


## Author

* [Lucy Yang](https://github.com/l-yang-05)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

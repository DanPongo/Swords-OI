# Swords of Iron App
![Screenshot 2023-10-22 171457](https://github.com/DanPongo/-Swords-of-Iron-information-for-citizens/assets/106473315/1cf74cc4-b69c-421f-a9e7-1c1d461ca304)




The Swords of Iron App is a comprehensive platform designed to assist individuals in accessing vital information and resources during times of war or conflict. This innovative app provides streamlined access to government reports, protection measures, social support services, and more.

## Getting Started


Clone this repository to your local machine.
```bash
git clone <repository-url>
```
## Demo : https://swords-of-iron-f0k6.onrender.com/

### Prerequisites

Ensure you have the following installed:

- A web server (such as Apache, Nginx, or any other of your choice)
- A modern web browser (Chrome, Firefox, Safari, etc.)

### Installing

Once you have cloned the repository, navigate to the project directory and open the `index.html` file in your web browser.

```bash
cd swords-of-iron-app
open index.html
```

## Built With

- HTML5
- CSS3
- JavaScript
- JSON

## Code Examples

```javascript
// Load images and URLs from JSON file
document.addEventListener("DOMContentLoaded", function () {
    fetch("data/urls.json")
        .then((response) => response.json())
        .then((data) => {
            loadImages(data["page1"].concat(data["page2"]));
        })
        .catch((error) => console.log(error));
});

// Change language between English and Hebrew
document.getElementById("englishButton").addEventListener("click", function() {
    changeLanguage("en");
});

document.getElementById("hebrewButton").addEventListener("click", function() {
    changeLanguage("he");
});

function changeLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    //... (additional language change code)
}
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## Authors

- **Your Name**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- All the contributors who helped in building this app.

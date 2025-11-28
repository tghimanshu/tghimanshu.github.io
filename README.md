# BreezyCV - Resume / CV / vCard / Portfolio Template

BreezyCV is a responsive, feature-rich template designed for creating personal portfolios, CVs, and vCards. It utilizes HTML5, CSS3, JavaScript (jQuery), and PHP to provide a smooth, animated, and interactive user experience.

## Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Setup & Configuration](#setup--configuration)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Contact Form Configuration](#contact-form-configuration)
  - [Google Maps Configuration](#google-maps-configuration)
- [Usage](#usage)
  - [Directory Structure](#directory-structure)
  - [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Purpose

The main purpose of this project is to provide a professional and visually appealing template for individuals to showcase their skills, experience, and portfolio. It is designed to be easily customizable and deployable.

## Features

- **Responsive Design**: Works on desktops, tablets, and mobile devices.
- **Page Transitions**: Smooth animations between different sections of the website.
- **Portfolio Grid**: Filterable portfolio grid using `shuffle.js`.
- **Contact Form**: Functional contact form with Google reCAPTCHA and PHP backend.
- **Custom Scroll**: Styled scrollbars for a consistent look across browsers.
- **Blog Section**: Masonry layout for blog posts.
- **Testimonials & Clients**: Carousels for showcasing testimonials and client logos.

## Setup & Configuration

### Prerequisites

To run this template fully, you will need:
- A web server (Apache, Nginx, etc.) with PHP support (for the contact form).
- A modern web browser.

### Installation

1.  **Clone the repository** (or download the files):
    ```bash
    git clone <repository_url>
    ```
2.  **Upload** the files to your web server's public directory (e.g., `public_html`).

### Contact Form Configuration

To make the contact form work, you need to configure the `contact_form/contact_form.php` file:

1.  Open `contact_form/contact_form.php`.
2.  Update the following variables:
    ```php
    $from = 'info@yourdomain.com'; // Your hosting admin email (sender)
    $sendTo = 'your@mail.com';     // Your email address (recipient)
    $secret = 'YOUR_RECAPTCHA_SECRET_KEY'; // Google reCAPTCHA Secret Key
    ```
3.  Ensure you have registered your domain with [Google reCAPTCHA](https://www.google.com/recaptcha/) to get the Site Key and Secret Key.
4.  Update the HTML file (e.g., `index.html`) with your reCAPTCHA **Site Key** in the `data-sitekey` attribute of the reCAPTCHA div.

### Google Maps Configuration

To enable the Google Map in the contact section:

1.  Open `js/main.js`.
2.  Find the Google Maps initialization code:
    ```javascript
    $("#map").googleMap({
      zoom: 16,
    });
    $("#map").addMarker({
      address: "S601 Townsend Street, San Francisco, California, USA",
    });
    ```
3.  Update the `address` to your desired location.
4.  **Important**: You also need to include the Google Maps API script in your HTML file with a valid API Key.

## Usage

### Directory Structure

-   `css/`: Contains CSS stylesheets.
-   `js/`: Contains JavaScript files.
    -   `main.js`: Main application logic.
    -   `animating.js`: Page transition logic.
    -   `validator.js`: Form validation library.
-   `contact_form/`: Contains the PHP script for the contact form.
-   `img/`: Images and assets.
-   `fonts/`: Font files.

### Customization

-   **Content**: Edit the HTML files (`index.html`, etc.) to update the text, images, and structure.
-   **Styles**: Modify `css/main.css` (or relevant CSS files) to change the appearance.
-   **Scripts**: Custom logic can be added to `js/main.js`.

## Contributing

If you wish to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Submit a pull request.

## License

[License Information Here]

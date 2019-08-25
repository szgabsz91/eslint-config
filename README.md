# @szg/eslint-config

[![Build Status](https://travis-ci.org/szgabsz91/eslint-config.svg?branch=master)](https://travis-ci.org/szgabsz91/eslint-config)
[![Dependencies](https://img.shields.io/david/szgabsz91/eslint-config.svg)](https://david-dm.org/szgabsz91/eslint-config)
[![License](https://img.shields.io/github/license/szgabsz91/eslint-config.svg)](https://github.com/szgabsz91/eslint-config/blob/master/LICENSE)

ESLint configurations for [@szg scoped packages](https://www.npmjs.com/search?q=@szg).

The main responsibilities are:

* Adds the `Authorization` and `X-OAuth2-Provider` headers to REST API requests.
* In case of images, adds the `access_token` and `oauth2_provider` query parameters.
* Provides components to login and logout with several supported OAuth2 providers such as Facebook and Google.
* Stores the authentication information in local storage.

Currently supported technology stacks:

* VanillaJS
* AngularJS

The AngularJS demo application that uses mock data can be viewed here: [https://szgabsz91.github.io/oauth2-authorization-proxy-client](https://szgabsz91.github.io/oauth2-authorization-proxy-client). You can authenticate with Facebook or Google, but due to the mock data, profile information will not reflect your actual profile. However, without authentication, you will get HTTP 401 for REST requests and protected image requests.

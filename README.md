# _Galactic Age Calculator_

#### _Business logic for an application that will calculate the user's age and remaining lifespan on other planets_

#### By _**Daniel Merys**_

## Description

_This repository contains files used as the business logic for an application that will take a user's age, gender, and continent and return the average lifespan, the years remaining until they reach that average, as well as their age on the planets Mercury, Venus, Mars, and Jupiter._

## Setup/Installation Requirements


## Known Bugs

No bugs currently known, but please let me know if you find one so I can correct it.
 
## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/dkmerys/project-template/issues) here on GitHub._

## Technologies Used

HTML
CSS
Bootstrap
Git and GitHub
JavaScript
jQuery
Jest
Babel
Webpack
ESLint

### Specs
| Spec                                                                                           | input              | output |
|------------------------------------------------------------------------------------------------|--------------------|--------|
| Will create new Calculator object                                                              |                    |        |
| Will create new Person object                                                                  |                    |        |
| Will create new Person nested in Calculator                                                    |                    |        |
| Will give user's age in years on Mercury (divide user age by 0.24) rounded to nearest integer. | 25                 | 104    |
| Will give user's age in years on Venus (divide by 0.62) rounded to nearest integer.            | 25                 | 40     |
| Will give user's age in years on Mars (divide by by 1.88) rounded to nearest integer.          | 25                 | 13     |
| Will give user's age in years on Jupiter (divide by 11.86) rounded to nearest integer.         | 25                 | 2      |
| Will determine average lifespan based on user-selected gender and continent                    | "Female" "Europe"  | 82     |
| Will subtract age from average lifespan to give years remaining in life                        | 25 "Female" "Asia" | 50     |
| Will give years remaining on Mercury                                                           | 25 "Female" "Asia" | 208    |
| Will give years remaining on Venus                                                             | 25 "Female" "Asia" | 81     |
| Will give years remaining on Mars                                                              | 25 "Female" "Asia" | 27     |
| Will give years remaining on Jupiter                                                           | 25 "Female" "Asia" | 4      |
| Will show number of years (if any) that user has lived beyond the average life span            | 88 "Female" "Asia" | 13     |



### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Daniel Merys_**
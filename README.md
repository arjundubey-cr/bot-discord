# Discord Bot for Resumes / Internships &middot;

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-GCC3.0-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Created for Intern Grind Discord Server

This project creates a discord bot which moves resume files from a channel where users can post their resumes and comment on others to a channel containing only the resume PDFs in order to simplify finding resumes in the server. The project also sorts job postings from one chat channel into another channel to make the postings easier to view. Apart from this it alson has some additional functionalities, checkout {prefix}help for more

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

0. Run yarn install to install dependencies.
### Create a bot on discord.com/developers and generate token.
1. Create config.json in main directory and edit the contents as below.
```shell
{
  "prefix": ".",
  "resume_channel": "736822249491005502",
  "DOG_API_KEY": "NzMyNDM3Mjg3MjcwNjEzMTIy.Xw0lYQ.BIbyP_0IWXuUtmd1jSInyqlO5T4",
  "CAT_API_KEY": "7bd3f747-6193-41bc-97d6-2643494791bd",
  "image-channel": "images",
  "job_channel": "736980807788265655",
  "job_board": "736980807788265655"
}

```
2. After above edit bot_data.json
```shell
{
  "resume_channel": "736822249491005502",
  "DOG_API_KEY": "<PUT API KEY HERE>",
  "CAT_API_KEY": "<PUT API KEY HERE>",
  "image_channel": "<SPECIFY CHANNEL ID FOR RANDOM CAT/DOG IMAGES>",
  "leetcode_channel": "<LEETCODE_CHANNEL_ID_HERE>",
  "job_channel": "<JOB_CHANNEL_ID_HERE>",
  "job_board": "<JOB_BOARD_ID_HERE>",
}

commands here
```


## Developing

### Built With

Built with discord.js and Node.js

Leetcode data file from https://github.com/SeanPrashad/leetcode-patterns/blob/master/src/data/index.js

### Prerequisites

No prerequisites.

### Setting up Dev

How to develop the project further:

```shell
git clone https://www.github.com/arjundubey-cr/bot-discord
cd bot-discord
yarn install
.
.
.
git checkout -b <branch_name>
.
.
.
```
## Licensing

Project created using GCC license and text version can be found at https://opensource.org/licenses/GPL-3.0

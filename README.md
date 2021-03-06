# Discord Bot for Resumes / Internships &middot;

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-GCC3.0-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Created for Intern Grind Discord Server

This project is a discord bot which moves resume files from a channel where users can post their resumes and comment on others to a channel containing only the resume PDFs in order to simplify finding resumes in the server. The project also sorts job postings from one chat channel into another channel to make the postings easier to view. Apart from this it alson has some additional functionalities, checkout {prefix}help for more

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

0. Run yarn install to install dependencies.
### Create a bot on discord.com/developers and generate token.
1. Create config.json in main directory and edit the contents as below.
```shell
{
  "prefix": ".",
  "token":"Enter bot token here"
  "resume_channel": "736822249491005502",
  "DOG_API_KEY": "<api key>",
  "CAT_API_KEY": "<api key here>",
  "image-channel": "images",
  "job_channel": "<job channel id/name here>",
  "job_board": "<jobBoarding channel id/name here>"
  "leetcode_channel":"<leetcode_questions_channel id here>"
}

```
node bot.js

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

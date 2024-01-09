# 11ty Resume Template

This template can be used to create new resumes with 11ty.

See [Demo](https://www.gurpreet-singh.in)

## Features

- Fully Customizable
- Semantic HTML
- Theming with TailwindCSS (Dark/Light)
- Accessible (WCAG AA)
- Self-Contained (no external resources)
- Search Engine Optimized (meta, JSON-LD, etc...)

### Lighthouse Performance Scores

![lighthouse performance scores](https://github.com/learnwithgurpreet/11ty-resume-template/assets/3865313/2c1a0fa9-cef2-4c16-b893-f3748d995c62)

### Screenshot

![screenshot](https://github.com/learnwithgurpreet/11ty-resume-template/assets/3865313/184dec87-6e3e-4428-85f4-dfacc1e36f2e)

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```
npm install
```

**Commands**

- Run `npm start` for a development server and live reloading
- Run `npm run build` to generate a production build

Deploy a fork of this template to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/learnwithgurpreet/11ty-resume-template)

## Customize your Resume

To edit the content and design of your resume, follow these steps:

### 1. Author Details

Open `src/data/author.json` and edit the information describing yourself. The following properties are supported (optional properties can be removed from the JSON file):

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>name</code></td>
            <td>your full name</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>shortName</code></td>
            <td>Name initials (for logo area)</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>org</code></td>
            <td>Organization</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>image</code></td>
            <td>Profile picture URL</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td>Job title</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>currentFocus</code></td>
            <td>Text which shows on top section of the page</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>location</code></td>
            <td>Your current location</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>email</code></td>
            <td>your email address</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>telephone</code></td>
            <td>telephone number (only being used in schema contact)</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>website</code></td>
            <td>website URL</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>connect[]</code></td>
            <td>Array of Objects holding social connect information</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>connect[index].name</code></td>
            <td>Name of the social platform</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>connect[index].icon</code></td>
            <td><code>svg</code> icon file string</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>connect[index].url</code></td>
            <td>Social profile URL</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>skills[]</code></td>
            <td>Array of objects</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>skills[index].type</code></td>
            <td>String based category</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>skills[index].tools</code></td>
            <td>Array of skills</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>skills[index].tools[index].language</code></td>
            <td>Type of language or framework/library</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>skills[index].tools[index].icon</code></td>
            <td><code>svg</code> icon file string</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>worksFor[]</code></td>
            <td>Holds list of working experiences</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>worksFor[index].companyName</code></td>
            <td>Company Name</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>worksFor[index].title</code></td>
            <td>Your role</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>worksFor[index].time_start</code></td>
            <td>Starting time of your role/job</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>worksFor[index].time_end</code></td>
            <td>Ending time of your role/job (You can also use <code>Present</code> together with <code>isCurrent</code> attribute.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>worksFor[index].link</code></td>
            <td>Company URL</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>worksFor[index].isCurrent</code></td>
            <td>If you are currently working here</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>hasCredential[]</code></td>
            <td>List of Certifications</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>hasCredential[index].org</code></td>
            <td>Organization provided the certificate</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>hasCredential[index].certification</code></td>
            <td>Name of the certification</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>hasCredential[index].year</code></td>
            <td>Year when you certified.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>hasCredential[index].link</code></td>
            <td>Link of your credentials</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>hasCredential[index].technologies</code></td>
            <td>Technologies, or Used tech stack to delivery the project</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>publishes[]</code></td>
            <td>Publications</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>publishes[index].title</code></td>
            <td>Title of your article/blog post or publication</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>publishes[index].date</code></td>
            <td>published year/month or date</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>publishes[index].link</code></td>
            <td>Link of your publication</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>publishes[index].details</code></td>
            <td>Short summary of your publication</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>alumniOf[]</code></td>
            <td>Your degree or schooling details</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>alumniOf[index].org</code></td>
            <td>Organization provided the certificate</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>alumniOf[index].certification</code></td>
            <td>Name of the certification</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>alumniOf[index].year_start</code></td>
            <td>Year when started the degree.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>alumniOf[index].year_end</code></td>
            <td>Completion year of degree.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>alumniOf[index].address</code></td>
            <td>Address of your institute of university.</td>
            <td>required</td>
        </tr>
    </tbody>
</table>

### 2. Recent Project Details

Open `src/data/projects.json` and edit the information describing your recent projects. The following properties are supported (optional properties can be removed from the JSON file):

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>industry</code></td>
            <td>Type of domain of your project</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>details</code></td>
            <td>Short summary of project</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>role[]</code></td>
            <td>Array of Strings showcasing your role and responsibilities.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>status</code></td>
            <td>status of your project, example: live</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>technologies</code></td>
            <td>Technologies, or Used tech stack to delivery the project</td>
            <td>required</td>
        </tr>
    </tbody>
</table>

### 3. Site details

Open `src/data/site.json` and edit the information describing your recent site level details, theme color, locale, etc. The following properties are supported (optional properties can be removed from the JSON file):

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>name</code></td>
            <td>Website name</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>url</code></td>
            <td>URL of your website</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>Canonical</code></td>
            <td>In case you have another similar website, you can provide its URL</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>lang</code></td>
            <td>Language of your webpage (Eg. `en`)</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>locale</code></td>
            <td>default locale (Eg. en_US)</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td>Page title of your webpage</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>themeColor</code></td>
            <td>It will help in site.webmanifest file</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>backgroundColor</code></td>
            <td>It will help in site.webmanifest file</td>
            <td>optional</td>
        </tr>
    </tbody>
</table>

## Credits
Inpired by [weeby.studio](https://weeby.studio) Intro theme.

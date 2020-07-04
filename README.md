# PatientAid

The [PatientAid](https://patientaid.me) project's mission is to provide a software service to connect potential COVID-19 patients to healthcare providers through a privacy-first, comprehensive self-service and to deliver actionionable guidance from providers to patients in real time.
  
As part of a larger initiative from NECSI with the explicit goal of stopping the spread of nCov-2019 / COVID19, it will rely on collaboration among a group of people who volunteer to help from various disciplines to make this happen.

As part of [a larger initiative](https://www.endcoronavirus.org/) from the [New England Complex Systems Institute (NECSI)](https://necsi.edu/) with the explicit goal of stopping the spread of COVID-19, the PatientAid project relies on collaboration among a group of volunteers from various disciplines across multiple timezones.

## Join us

If you would like to contribute to this project, join us at https://www.endcoronavirus.org. Find us in the `#response-patientaid-general` channel and say hi!

## Overview

At a high level, the application consists of:

* A web interface for collecting patient data (location, symptoms, etc.) to calculate triage decision
* A web interface for healthcare providers to review decisions and make appointments
* An API service that will receive the triage decision and persist the patient profile with it

The web interfaces are built with React and the API service with Python (Flask) and Postgres as the datastore. This is expected to be a hosted solution - the idea is that it will be built in a way that would allow anybody to use the software as they see fit within their own hosting environment.

Finally, it is worth noting that the technical design decisions that have been made either implicitly or explicitly so far are subject to change. There are a number of challenges regarding the distribution, compliance, maintenance, and support for the application that are being actively worked on, and we aim to make our decisions in a way that would allow us to adapt and respond quickly to changing circumstances.

## Quick Start

1. Run `docker-compose up -d`
2. Visit `http://localhost:3000` in your browser.

_For a more detailed walk-through, please refer to the [project wiki](https://github.com/PatientAid2020/Development/wiki)._

Any questions? Please feel free to post them in the `#patientaid-dev` channel, and other volunteers will help you out!

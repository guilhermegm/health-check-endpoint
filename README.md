# Health-Check Endpoint

Health Check Endpoint for Express

## Installation

```
npm install health-check-endpoint --save
```

## Usage

```
const express = require('express')
const healthCheckEndpoint = require('health-check-endpoint')

const app = express()
const responseHealthCheck = { version: packageJson.version }

healthCheckEndpoint(app)(responseHealthCheck)
```

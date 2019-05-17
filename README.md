# University Schedule Parser
Parse schedule for some university in Indonesia.

## Installation

Using npm:
```sh
$ npm install university-schedule-parser
```

## Usage

In es6:
```javascript
  import {ScheduleType, parse} from 'university-schedule-parser';

  .
  .
  .

  // Schedule webpage html in string
  const html = '...';

  // University name
  const type = ScheduleType.Telkom;
  
  const schedule = parse(html, type);
```

Parsed schedule will have properties described below.

### StudentData
| Name        | Type                | Description       |
|-------------|---------------------|-------------------|
| `name`      | string              | Student name      |
| `nim`       | string              | Student ID        |
| `schedules` | array of `Schedule` | Student schedules |

### Schedule
| Name         | Type   | Description                                          |
|--------------|--------|------------------------------------------------------|
| `day`        | string | Day name for current schedule (english / indonesian) |
| `start`      | string | Start hour for current schedule                      |
| `end`        | string | End hour for current schedule                        |
| `name`       | string | Schedule name                                        |
| `room`       | string | Schedule room name                                   |
| `class_name` | string | Schedule class name                                  |
| `code`       | string | Schedule code                                        |

## Supported Universities
Below are supported university schedule and their respective enum type.

| Type     | University                                           |
|----------|------------------------------------------------------|
| `Telkom` | [Telkom University](https://telkomuniversity.ac.id/) |

---
**Matias Alvin(2019)**
